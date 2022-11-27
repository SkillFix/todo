!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire6dc0;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequire6dc0=o),o.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){u.default(t,e,n[e])}))}return t};var i,u=(i=o("hKHmD"))&&i.__esModule?i:{default:i};var c={},l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var s="Expected a function",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,y="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,b=y||m||Function("return this")(),k=Object.prototype.toString,O=Math.max,S=Math.min,h=function(){return b.Date.now()};function w(t,e,n){var r,o,a,i,u,c,l=0,f=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(s);function p(e){var n=r,a=o;return r=o=void 0,l=e,i=t.apply(a,n)}function g(t){return l=t,u=setTimeout(m,e),f?p(t):i}function y(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=a}function m(){var t=h();if(y(t))return b(t);u=setTimeout(m,function(t){var n=e-(t-c);return d?S(n,a-(t-l)):n}(t))}function b(t){return u=void 0,v&&r?p(t):(r=o=void 0,i)}function k(){var t=h(),n=y(t);if(r=arguments,o=this,c=t,n){if(void 0===u)return g(c);if(d)return u=setTimeout(m,e),p(c)}return void 0===u&&(u=setTimeout(m,e)),i}return e=j(e)||0,T(n)&&(f=!!n.leading,a=(d="maxWait"in n)?O(j(n.maxWait)||0,e):a,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},k.flush=function(){return void 0===u?i:b(h())},k}function T(e){var n=void 0===e?"undefined":t(l)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(l)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(T(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=v.test(e);return r||p.test(e)?g(e.slice(2),r?2:8):d.test(e)?NaN:+e}c=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(s);return T(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),w(t,e,{leading:r,maxWait:e,trailing:o})};var x=document.querySelector("#newTask"),L=document.querySelector(".todo-list"),N=document.querySelector("#clearList"),_=document.querySelector(".newtask-box"),E=document.querySelector("#char_count"),I=document.querySelector("#submit"),M="task-state";function q(){return null==localStorage.getItem("todoList")?[]:JSON.parse(localStorage.getItem("todoList"))}function D(){var t=q().length;N.style.display=t>0?"block":"none"}function P(){E.textContent="100/100";var t=q();t||(t=[]),t.push({value:x.value,state:"pending"});var e=JSON.stringify(t);localStorage.setItem("todoList",e),x.value="",J()}function J(){L.innerHTML="";var t=q();D(),t.forEach((function(t,e){var n=t.value,r=t.state;L.insertAdjacentHTML("beforeend",'\n      <li class="task-item">\n      <p class="'.concat(r,'">').concat(n,'</p>\n      <div class="task-item__wrapper">\n      <input type="button" class="editTask" data-taskId=').concat(e,' value="Edit task">\n      <input type="button" class="confirmTask" data-taskId=').concat(e,' value="Completed">\n      <input type="button" class="deleteTask" data-taskId=').concat(e,' value="Delete">\n      </div>\n    </li>'))}))}D(),I.addEventListener("click",P),x.addEventListener("input",c((function(){var t=x.value;localStorage.setItem(M,JSON.stringify({newTask:t}))}),500)),localStorage.getItem(M)&&function(){var t=JSON.parse(localStorage.getItem(M));try{for(var e in t)_[e].value=t[e]}catch(t){console.log("error",t)}}(),x.addEventListener("keydown",(function(t){x.value.length<=100&&$(),"Enter"===t.key&&P()})),J(),N.addEventListener("click",(function(){localStorage.setItem("todoList","[]"),J(),D()})),L.addEventListener("click",(function(t){"deleteTask"===t.target.className&&H(t.target.dataset.taskid),"confirmTask"===t.target.className&&C(t.target.dataset.taskid),"editTask"===t.target.className&&(x.value=q()[t.target.dataset.taskid].value,H(t.target.dataset.taskid))}));var C=function(e){var n=q();n[e]=t(a)({},n[e],{state:"done"}),localStorage.setItem("todoList",JSON.stringify(n)),J()},H=function(t){var e=q();e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),J(),D()},$=function(){var t=100-x.value.length;E.textContent=t+"/100"}}();
//# sourceMappingURL=index.bdc1662e.js.map
