var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,d=Math.max,f=Math.min,g=function(){return c.Date.now()};function p(t,e,n){var a,o,i,r,s,l,c=0,u=!1,p=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function k(e){var n=a,i=o;return a=o=void 0,c=e,r=t.apply(i,n)}function b(t){return c=t,s=setTimeout(T,e),u?k(t):r}function S(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-c>=i}function T(){var t=g();if(S(t))return h(t);s=setTimeout(T,function(t){var n=e-(t-l);return p?f(n,i-(t-c)):n}(t))}function h(t){return s=void 0,m&&a?k(t):(a=o=void 0,r)}function w(){var t=g(),n=S(t);if(a=arguments,o=this,l=t,n){if(void 0===s)return b(l);if(p)return s=setTimeout(T,e),k(l)}return void 0===s&&(s=setTimeout(T,e)),r}return e=y(e)||0,v(n)&&(u=!!n.leading,i=(p="maxWait"in n)?d(y(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=o=s=void 0},w.flush=function(){return void 0===s?r:h(g())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var s=o.test(t);return s||i.test(t)?r(t.slice(2),s?2:8):a.test(t)?NaN:+t}e=function(t,e,n){var a=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:a,maxWait:e,trailing:o})};const m=document.querySelector("#newTask"),k=document.querySelector(".todo-list"),b=document.querySelector("#clearList"),S=document.querySelector(".newtask-box"),T=document.querySelector("#char_count"),h=document.querySelector("#submit");function w(){return null==localStorage.getItem("todoList")?[]:JSON.parse(localStorage.getItem("todoList"))}function L(){const t=w().length;b.style.display=t>0?"block":"none"}function I(){T.textContent="100/100";let t=w();t||(t=[]),t.push({value:m.value,state:"pending"});const e=JSON.stringify(t);localStorage.setItem("todoList",e),m.value="",N()}function N(){k.innerHTML="";const t=w();L(),t.forEach((({value:t,state:e},n)=>{k.insertAdjacentHTML("beforeend",`\n      <li class="task-item">\n      <p class="${e}">${t}</p>\n      <div class="task-item__wrapper">\n      <input type="button" class="editTask" data-taskId=${n} value="Edit task">\n      <input type="button" class="confirmTask" data-taskId=${n} value="Completed">\n      <input type="button" class="deleteTask" data-taskId=${n} value="Delete">\n      </div>\n    </li>`)}))}L(),h.addEventListener("click",I),m.addEventListener("input",e((function(){let t=m.value;localStorage.setItem("task-state",JSON.stringify({newTask:t}))}),500)),localStorage.getItem("task-state")&&function(){const t=JSON.parse(localStorage.getItem("task-state"));try{for(let e in t)S[e].value=t[e]}catch(t){console.log("error",t)}}(),m.addEventListener("keydown",(t=>{m.value.length<=100&&j(),"Enter"===t.key&&I()})),N(),b.addEventListener("click",(()=>{localStorage.setItem("todoList","[]"),N(),L()})),k.addEventListener("click",(t=>{"deleteTask"===t.target.className&&E(t.target.dataset.taskid),"confirmTask"===t.target.className&&O(t.target.dataset.taskid),"editTask"===t.target.className&&(m.value=w()[t.target.dataset.taskid].value,E(t.target.dataset.taskid))}));const O=t=>{const e=w();e[t]={...e[t],state:"done"},localStorage.setItem("todoList",JSON.stringify(e)),N()},E=t=>{const e=w();e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),N(),L()},j=()=>{let t=100-m.value.length;T.textContent=t+"/100"};
//# sourceMappingURL=index.501491c4.js.map
