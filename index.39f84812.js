var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,d=Math.min,g=function(){return c.Date.now()};function p(t,e,n){var o,a,i,r,s,l,c=0,u=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function S(e){var n=o,i=a;return o=a=void 0,c=e,r=t.apply(i,n)}function b(t){return c=t,s=setTimeout(T,e),u?S(t):r}function k(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-c>=i}function T(){var t=g();if(k(t))return h(t);s=setTimeout(T,function(t){var n=e-(t-l);return p?d(n,i-(t-c)):n}(t))}function h(t){return s=void 0,y&&o?S(t):(o=a=void 0,r)}function O(){var t=g(),n=k(t);if(o=arguments,a=this,l=t,n){if(void 0===s)return b(l);if(p)return s=setTimeout(T,e),S(l)}return void 0===s&&(s=setTimeout(T,e)),r}return e=m(e)||0,v(n)&&(u=!!n.leading,i=(p="maxWait"in n)?f(m(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=a=s=void 0},O.flush=function(){return void 0===s?r:h(g())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var s=a.test(t);return s||i.test(t)?r(t.slice(2),s?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),p(t,e,{leading:o,maxWait:e,trailing:a})};const y=document.querySelector("#newTask"),S=document.querySelector(".todo-list"),b=document.querySelector("#clearList"),k=document.querySelector(".newtask-box"),T=document.querySelector("#char_count");function h(){S.innerHTML="";JSON.parse(localStorage.getItem("todoList")).forEach((({value:t,state:e},n)=>{S.insertAdjacentHTML("beforeend",`\n      <li class="task-item">\n      <p class="${e}">${t}</p>\n      <div class="task-item__wrapper">\n      <input type="button" class="confirmTask" data-taskId=${n} value="Completed">\n      <input type="button" class="deleteTask" data-taskId=${n} value="Delete">\n      </div>\n    </li>`)}))}y.addEventListener("input",e((function(){let t=this.value;localStorage.setItem("task-state",JSON.stringify({newTask:t}))}),500)),localStorage.getItem("task-state")&&function(){const t=JSON.parse(localStorage.getItem("task-state"));try{for(let e in t)k[e].value=t[e]}catch(t){console.log("error",t)}}(),y.addEventListener("keydown",(t=>{if(y.value.length<=100&&N(),"Enter"!==t.key)return;T.textContent="100/100";let e=JSON.parse(localStorage.getItem("todoList"));e||(e=[]),e.push({value:t.target.value,state:"pending"});const n=JSON.stringify(e);localStorage.setItem("todoList",n),t.target.value="",h()})),h(),b.addEventListener("click",(()=>{localStorage.setItem("todoList","[]"),h()})),S.addEventListener("click",(t=>{"deleteTask"===t.target.className&&L(t.target.dataset.taskid),"confirmTask"===t.target.className&&O(t.target.dataset.taskid)}));const O=t=>{const e=JSON.parse(localStorage.getItem("todoList"));e[t]={...e[t],state:"done"},localStorage.setItem("todoList",JSON.stringify(e)),h()},L=t=>{const e=JSON.parse(localStorage.getItem("todoList"));e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),h()},N=()=>{let t=100-y.value.length;T.textContent=t+"/100"};
//# sourceMappingURL=index.39f84812.js.map