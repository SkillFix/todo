!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire6dc0;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire6dc0=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u.default(e,t,n[t])}))}return e};var i,u=(i=o("hKHmD"))&&i.__esModule?i:{default:i};var c={},l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var f="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,b=y||m||Function("return this")(),O=Object.prototype.toString,S=Math.max,h=Math.min,k=function(){return b.Date.now()};function w(e,t,n){var r,o,a,i,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(f);function p(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function g(e){return l=e,u=setTimeout(m,t),s?p(e):i}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function m(){var e=k();if(y(e))return b(e);u=setTimeout(m,function(e){var n=t-(e-c);return d?h(n,a-(e-l)):n}(e))}function b(e){return u=void 0,v&&r?p(e):(r=o=void 0,i)}function O(){var e=k(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return g(c);if(d)return u=setTimeout(m,t),p(c)}return void 0===u&&(u=setTimeout(m,t)),i}return t=T(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?S(T(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},O.flush=function(){return void 0===u?i:b(k())},O}function j(t){var n=void 0===t?"undefined":e(l)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=v.test(t);return r||p.test(t)?g(t.slice(2),r?2:8):d.test(t)?NaN:+t}c=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(f);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),w(e,t,{leading:r,maxWait:t,trailing:o})};var x=document.querySelector("#newTask"),_=document.querySelector(".todo-list"),L=document.querySelector("#clearList"),N=document.querySelector(".newtask-box"),E=document.querySelector("#char_count"),I="task-state";function M(){return null==localStorage.getItem("todoList")?[]:JSON.parse(localStorage.getItem("todoList"))}function q(){var e=M().length;L.style.display=e>0?"block":"none"}function D(){_.innerHTML="";var e=M();q(),e.forEach((function(e,t){var n=e.value,r=e.state;_.insertAdjacentHTML("beforeend",'\n      <li class="task-item">\n      <p class="'.concat(r,'">').concat(n,'</p>\n      <div class="task-item__wrapper">\n      <input type="button" class="confirmTask" data-taskId=').concat(t,' value="Completed">\n      <input type="button" class="deleteTask" data-taskId=').concat(t,' value="Delete">\n      </div>\n    </li>'))}))}console.log(M()),q(),x.addEventListener("input",c((function(){var e=this.value;localStorage.setItem(I,JSON.stringify({newTask:e}))}),500)),localStorage.getItem(I)&&function(){var e=JSON.parse(localStorage.getItem(I));try{for(var t in e)N[t].value=e[t]}catch(e){console.log("error",e)}}(),x.addEventListener("keydown",(function(e){if(x.value.length<=100&&H(),"Enter"===e.key){var t=M();t||(t=[]),t.push({value:e.target.value,state:"pending"});var n=JSON.stringify(t);localStorage.setItem("todoList",n),e.target.value="",D()}})),D(),L.addEventListener("click",(function(){localStorage.setItem("todoList","[]"),D(),q()})),_.addEventListener("click",(function(e){"deleteTask"===e.target.className&&J(e.target.dataset.taskid),"confirmTask"===e.target.className&&P(e.target.dataset.taskid)}));var P=function(t){var n=M();n[t]=e(a)({},n[t],{state:"done"}),localStorage.setItem("todoList",JSON.stringify(n)),D()},J=function(e){var t=M();t.splice(e,1),localStorage.setItem("todoList",JSON.stringify(t)),D(),q()},H=function(){var e=100-x.value.length;E.textContent=e+"/100"}}();
//# sourceMappingURL=index.1c0aec40.js.map
