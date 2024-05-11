import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';  // Only import what you need

export function readDataFromText(text) {
    const data = {};
    const lines = text.split('\n');
    for (let line of lines) {
        if (line.includes(': ')) {
            const parts = line.split(': ');
            if (parts.length === 2) {
                const key = parts[0].trim();
                const value = parts[1].trim();
                data[key] = value;
            }
        }
    }
    return data;
}

export function loadAndReplaceData(docxContent, data) {
    const zip = new PizZip(docxContent);
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    doc.setData(data);

    try {
        doc.render();
    } catch (error) {
        console.error('Docxtemplater render error:', error);
        throw error;
    }

    const out = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(out, "output.docx");
}
