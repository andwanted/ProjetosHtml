/*! For license information please see main.7ea7d920865a360b37c1.js.LICENSE.txt */
(()=>{"use strict";var t,e={6e3:(t,e,r)=>{function n(t){var e=t.split("/");return"".concat(e[2],"-").concat(e[1],"-").concat(e[0])}function o(){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".data-brasil").forEach((function(t){t.addEventListener("input",(function(t){var e=t.target.value;(e=e.replace(/\D/g,"")).length>2&&(e=e.substring(0,2)+"/"+e.substring(2)),e.length>5&&(e=e.substring(0,5)+"/"+e.substring(5)),t.target.value=e}))}))}))}function a(){var t=function(t){return document.getElementById(t).value||""},e=t("numero-registro"),r=t("data-emissao"),n=t("nome-registrado"),o=t("sexo"),a=t("data-nascimento"),i=t("hora-nascimento"),c=t("local-nascimento"),u=t("cidade-estado-nascimento"),l=t("nome-pai"),s=t("nome-mae"),f=t("avos-paternos"),h=t("avos-maternos"),d=t("gemeos"),p=t("nome-registro-gemeos"),y=t("data-registro"),v=t("observacoes"),m=t("notas-registro"),g=t("tipo-documento"),b=t("numero"),E=t("matricula"),w=t("cidade-estado-registro"),L=function(t){return t?function(t){var e=t.split("/");return"".concat(e[2],"-").concat(e[1],"-").concat(e[0])}(t):""};document.getElementById("registration-number").value=e,document.getElementById("issuance-date").value=L(r),document.getElementById("name").value=n,document.getElementById("gender").value=o.toUpperCase(),document.getElementById("date-time-birth").value=L(a)+(i?"T"+i:""),document.getElementById("place-birth-city-state").value=c+(u?", "+u:""),document.getElementById("father").value=l,document.getElementById("mother").value=s,document.getElementById("paternal-grandparents").value=f,document.getElementById("maternal-grandparents").value=h,document.getElementById("twins").value="Sim"===d?"Yes":"No",document.getElementById("name-registration-twins").value=p,document.getElementById("date-registration").value=L(y),document.getElementById("observations").value=v,document.getElementById("registration-notes").value=m,document.getElementById("document-type").value=g,document.getElementById("document-number").value=b,document.getElementById("registration").value=E,document.getElementById("city-state-registration").value=w}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new _(n||[]);return o(i,"_invoke",{value:A(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function E(){}function w(){}var L={};f(L,u,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(R([])));I&&I!==r&&n.call(I,u)&&(L=I);var O=w.prototype=b.prototype=Object.create(L);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,c,u){var l=d(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function A(e,r,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function R(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return E.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:E,configurable:!0}),E.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},T(S.prototype),f(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(O),f(O,s,"Generator"),f(O,u,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=R,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function u(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(){return s.apply(this,arguments)}function s(){var t;return t=c().mark((function t(){var e,r,n,o,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r=[],[{id:"registration-number",label:"REGISTRATION NUMBER OF ALIVE BIRTH"},{id:"issuance-date",label:"ISSUANCE DATE"},{id:"name",label:"NAME"},{id:"gender",label:"GENDER"},{id:"date-time-birth",label:"DATE AND TIME OF BIRTH"},{id:"place-birth-city-state",label:"PLACE OF BIRTH, CITY AND STATE"},{id:"father",label:"FATHER"},{id:"mother",label:"MOTHER"},{id:"paternal-grandparents",label:"PATERNAL GRANDPARENTS"},{id:"maternal-grandparents",label:"MATERNAL GRANDPARENTS"},{id:"twins",label:"TWINS"},{id:"name-registration-twins",label:"NAME AND REGISTRATION OF TWINS"},{id:"date-registration",label:"DATE OF REGISTRATION"},{id:"registration-notes",label:"REGISTRATION NOTES"},{id:"document-type",label:"DOCUMENT TYPE"},{id:"number",label:"DOCUMENT NUMBER"},{id:"registration",label:"REGISTRATION"},{id:"city-state-registration",label:"CITY AND STATE OF REGISTRATION"},{id:"observations",label:"OBSERVATIONS"},{id:"social-security-card",label:"SOCIAL SECURITY CARD"},{id:"notes-amendments",label:"NOTES AMENDMENTS TO ADD"},{id:"city-state-birth",label:"CITY AND STATE OF BIRTH"}].forEach((function(t){var n=t.id,o=t.label,a=document.getElementById(n);if(a){var i=a.value.trim()||"empty";e.push("".concat(o,": ").concat(i))}else r.push(o)})),n=e.join("\n"),t.prev=5,t.next=8,window.showSaveFilePicker({suggestedName:"input.txt",types:[{description:"Text Files",accept:{"text/plain":[".txt"]}}]});case 8:return o=t.sent,t.next=11,o.createWritable();case 11:return a=t.sent,t.next=14,a.write(n);case 14:return t.next=16,a.close();case 16:alert("Dados salvos com sucesso!"),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),console.error("Erro ao salvar o arquivo:",t.t0);case 22:r.length>0&&alert("Campos não encontrados: "+r.join(", "));case 23:case"end":return t.stop()}}),t,null,[[5,19]])})),s=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))},s.apply(this,arguments)}var f=r(3227),h=r.n(f),d=r(5135),p=r.n(d),y=r(4213);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t){var e,r={},n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(t.split("\n"));try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.includes(": ")){var a=o.split(": ");if(2===a.length){var i=a[0].trim(),c=a[1].trim();r[i]=c}}}}catch(t){n.e(t)}finally{n.f()}return r}function g(t,e){var r=new(h())(t),n=new(p())(r,{paragraphLoop:!0,linebreaks:!0});n.setData(e);try{n.render()}catch(t){throw console.error("Docxtemplater render error:",t),t}var o=n.getZip().generate({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});(0,y.saveAs)(o,"output.docx")}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new _(n||[]);return o(i,"_invoke",{value:A(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",d="suspendedYield",p="executing",y="completed",v={};function m(){}function g(){}function w(){}var L={};l(L,i,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(R([])));I&&I!==r&&n.call(I,i)&&(L=I);var O=w.prototype=m.prototype=Object.create(L);function T(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==b(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function A(e,r,n){var o=h;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?y:d,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function R(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(b(e)+" is not iterable")}return g.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},T(S.prototype),l(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(O),l(O,u,"Generator"),l(O,i,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=R,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function w(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){w(a,n,o,i,c,"next",t)}function c(t){w(a,n,o,i,c,"throw",t)}i(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){console.log("Aplicação inicializada"),document.querySelectorAll(".data-brasil").forEach((function(t){t.addEventListener("input",o)})),document.getElementById("nome-registrado").addEventListener("input",(function(){var t;(t=this).value=t.value.toUpperCase().replace(/[^a-zA-Z\s]/g,"")})),document.getElementById("sexo").addEventListener("input",(function(){this.value=this.value.toUpperCase()})),document.getElementById("data-emissao").addEventListener("blur",(function(){n(this)})),document.getElementById("data-nascimento").addEventListener("blur",(function(){n(this)})),document.getElementById("gemeos").addEventListener("change",(function(){var t;t=document.getElementById("nome-registro-gemeos"),"Sim"===this.value?t.disabled=!1:(t.disabled=!0,t.value="")})),document.getElementById("fillButton").addEventListener("click",a),document.getElementById("saveButton").addEventListener("click",l),document.getElementById("generateDocx").addEventListener("click",L(E().mark((function t(){var e,r,n,o;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("docxInput").files[0],r=document.getElementById("dataInput").value,e&&r?(n=m(r),(o=new FileReader).onload=function(t){var e=t.target.result;try{g(e,n)}catch(t){console.error("Error processing document:",t)}},o.readAsBinaryString(e)):alert("Please upload a DOCX file and input the data.");case 3:case"end":return t.stop()}}),t)}))))}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,o,a]=t[s],c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={792:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,u]=r,l=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self.webpackChunkandwanted_github_io=self.webpackChunkandwanted_github_io||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[773],(()=>n(6e3)));o=n.O(o)})();