var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,d=Math.max,f=Math.min,g=function(){return c.Date.now()};function p(t,e,n){var a,o,i,r,s,l,c=0,u=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function k(e){var n=a,i=o;return a=o=void 0,c=e,r=t.apply(i,n)}function b(t){return c=t,s=setTimeout(w,e),u?k(t):r}function h(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-c>=i}function w(){var t=g();if(h(t))return S(t);s=setTimeout(w,function(t){var n=e-(t-l);return p?f(n,i-(t-c)):n}(t))}function S(t){return s=void 0,y&&a?k(t):(a=o=void 0,r)}function x(){var t=g(),n=h(t);if(a=arguments,o=this,l=t,n){if(void 0===s)return b(l);if(p)return s=setTimeout(w,e),k(l)}return void 0===s&&(s=setTimeout(w,e)),r}return e=m(e)||0,v(n)&&(u=!!n.leading,i=(p="maxWait"in n)?d(m(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=o=s=void 0},x.flush=function(){return void 0===s?r:S(g())},x}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var s=o.test(t);return s||i.test(t)?r(t.slice(2),s?2:8):a.test(t)?NaN:+t}e=function(t,e,n){var a=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:a,maxWait:e,trailing:o})};const y=document.querySelector("#newTask"),k=document.querySelector(".todo-list"),b=document.querySelector("#clearList"),h=document.querySelector(".newtask-box"),w=document.querySelector("#char_count"),S=document.querySelector("#submit");function x(){return null==localStorage.getItem("todoList")?[]:JSON.parse(localStorage.getItem("todoList"))}function T(){const t=x().length;b.style.display=t>0?"block":"none"}function I(){w.textContent="100/100";let t=x();t||(t=[]),y.value.length<3&&preventdefault(),t.push({value:y.value,state:"pending"});const e=JSON.stringify(t);localStorage.setItem("todoList",e),y.value="",L()}function L(){k.innerHTML="";const t=x();T(),t.forEach((({value:t,state:e},n)=>{k.insertAdjacentHTML("beforeend",`\n      <li class="task-item">\n      <p class="${e} text">${t}</p>\n      <div class="task-item__wrapper">\n      <div class="button__wrapper">\n      <input type="button" class="editTask" data-taskId=${n} value="Edit task">\n      <input type="button" class="confirmTask" data-taskId=${n} value="Completed">\n      <input type="button" class="deleteTask" data-taskId=${n} value="Delete">\n      </div>\n      <button type="button" class="showBtn">\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class='menu' width="30px" height="30px">\n      <symbol id="menu" viewBox="0 0 32 32">\n      <path d="M11.15 0.9c-5.45 1.95-8.9 5.6-10.5 11.050-1.45 5.1 0.2 11.4 4.1 15.3 6.1 6.050 16.4 6.050 22.5 0 4.55-4.6 5.9-12.050 3.2-17.8-3.45-7.3-12.050-11.15-19.3-8.55zM23.85 9.3c0.5 1.4-0.9 1.7-7.85 1.7s-8.35-0.3-7.85-1.7c0.25-0.7 1.4-0.8 7.85-0.8s7.6 0.1 7.85 0.8zM23.75 16c0 0.65-1.2 0.75-7.45 0.9-7.2 0.1-8.8-0.15-8.050-1.35 0.2-0.4 2.75-0.55 7.9-0.45 6.35 0.15 7.6 0.25 7.6 0.9zM23.45 21.45c0.4 0.25 0.55 0.8 0.4 1.25-0.25 0.7-1.4 0.8-7.85 0.8s-7.6-0.1-7.85-0.8c-0.15-0.45 0-1 0.4-1.25 0.9-0.55 14-0.55 14.9 0z"></path>\n      </symbol>\n      <use xlink:href="#menu"/>\n      </svg>\n      </button>\n      </div>\n    </li>`),localStorage.setItem("task-state","[]")}))}T(),S.addEventListener("click",I),y.addEventListener("input",e((function(){let t=y.value;localStorage.setItem("task-state",JSON.stringify({newTask:t}))}),500)),localStorage.getItem("task-state")&&function(){const t=JSON.parse(localStorage.getItem("task-state"));try{for(let e in t)h[e].value=t[e]}catch(t){console.log("error",t)}}(),y.addEventListener("keydown",(t=>{y.value.length<=100&&E(),"Enter"===t.key&&(y.value.length<1&&preventdefault(),I())})),L(),b.addEventListener("click",(()=>{localStorage.setItem("todoList","[]"),L(),T()})),k.addEventListener("click",(t=>{"deleteTask"===t.target.className&&O(t.target.dataset.taskid),"confirmTask"===t.target.className&&N(t.target.dataset.taskid),"editTask"===t.target.className&&(y.value=x()[t.target.dataset.taskid].value,O(t.target.dataset.taskid))}));const N=t=>{const e=x();e[t]={...e[t],state:"done"},localStorage.setItem("todoList",JSON.stringify(e)),L()},O=t=>{const e=x();e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),L(),T()},E=()=>{let t=100-y.value.length;w.textContent=t+"/100"};
//# sourceMappingURL=index.b4b05c43.js.map