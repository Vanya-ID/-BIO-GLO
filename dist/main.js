!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){document.querySelectorAll("form").forEach((function(e){var t=document.createElement("div");t.style.cssText="font-size: 2rem;",t.style.color="#000",e.querySelectorAll('input[name="user_name"]').forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^ а-яё]/gi,"")}))})),e.addEventListener("submit",(function(o){o.preventDefault(),e.appendChild(t),t.textContent="";e.insertAdjacentHTML("beforeend",'<div class="preloader todelete">\n            <div class="preloader__row todelete">\n              <div class="preloader__item todelete"></div>\n              <div class="preloader__item todelete"></div>\n            </div>\n          </div>');var r=new FormData(e),l={};r.forEach((function(e,t){l[t]=e}));n(l).then((function(n){if(Array.from(e.querySelectorAll(".todelete")).forEach((function(e){e.remove()})),200!==n.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся",e.querySelectorAll("input").forEach((function(e){e.value=""}));setTimeout((function(){t.remove()}),3e3)})).catch((function(){t.textContent="Что-то пошло не так...",console.error();setTimeout((function(){t.remove(),Array.from(e.querySelectorAll(".todelete")).forEach((function(e){e.remove()}))}),3e3)}))}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}))},r=function(){var e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".visible-sm-block"),n=document.querySelectorAll(".hidden");e.addEventListener("click",(function(){e.remove(),t.classList.remove("visible-sm-block"),n.forEach((function(e){e.classList.remove("hidden")}))}))},l=function(){var e=document.querySelector(".popup-discount"),t=document.querySelectorAll(".discount-btn"),n=e.querySelectorAll("input");t.forEach((function(t){t.addEventListener("click",(function(){e.style.display="block",n.forEach((function(e){e.setAttribute("required","true")}))}))})),e.addEventListener("click",(function(t){var o=t.target;o.classList.contains("popup-close")?(e.style.display="none",n.forEach((function(e){e.removeAttribute("required"),e.value=""}))):(o=o.closest(".popup-content"))||(e.style.display="none",n.forEach((function(e){e.removeAttribute("required"),e.value=""})))}))},c=function(){var e=document.querySelector(".gauging-button"),t=document.querySelector(".popup-check"),n=t.querySelectorAll("input");e.addEventListener("click",(function(){t.style.display="block",n.forEach((function(e){e.setAttribute("required","true")}))})),t.addEventListener("click",(function(e){var o=e.target;o.classList.contains("popup-close")?(t.style.display="none",n.forEach((function(e){e.removeAttribute("required"),e.value=""}))):(o=o.closest(".popup-content"))||(t.style.display="none",n.forEach((function(e){e.removeAttribute("required"),e.value=""})))}))},i=function(){document.querySelectorAll(".construct-btn").forEach((function(e){e.addEventListener("click",(function(t){var n=t.target;n=n.closest(".construct-btn");var o=document.querySelector("#accordion");if(n!==o.querySelector(".call-btn")){var r=e.parentNode.parentElement;r.classList.remove("in");for(var l=o.querySelectorAll(".panel-heading"),c=0;c<l.length-1;c++)r===l[c].nextElementSibling&&(r.classList.remove("in"),l[c+1].nextElementSibling.classList.add("in"))}}))}));var e=document.querySelector(".onoffswitch-checkbox"),t=document.querySelectorAll(".title-text")[1],n=document.querySelector("#calc-result");document.querySelector(".panel-group");t.style.display="none",t.nextElementSibling.style.display="none",t.nextElementSibling.nextElementSibling.style.display="none";var o=document.querySelector(".expand"),r=document.querySelectorAll(".expand")[1],l=document.querySelector("#myonoffswitch-two"),c=document.querySelectorAll(".expand")[2],i=document.querySelectorAll(".expand")[3];document.querySelectorAll(".call-btn")[1].addEventListener("click",(function(){var t,u,a,s,d,f,p,y,v,m,b,S;t=1e4,u=0,a=0,s=0,d=0,f=0,p=0,y=0,v=+o.options[o.selectedIndex].value.substr(0,1),m=+r.options[r.selectedIndex].value.substr(0,1),b=+c.options[c.selectedIndex].value.substr(0,1),S=+i.options[i.selectedIndex].value.substr(0,1),e.checked||(d=5e3,f=2===b?d+.2*d:d,2===S?p=.2*f:3===S&&(p=.4*f),y=f+p),u=2===v?t+.2*t:t,2===m?a=.3*u:3===m&&(a=.5*u),l.checked&&(s=e.checked?.1*u:.2*(u+a+y)),n.value=u+a+s+y})),e.addEventListener("click",(function(){e.checked?(t.style.display="none",t.nextElementSibling.style.display="none",t.nextElementSibling.nextElementSibling.style.display="none"):(t.style.display="block",t.nextElementSibling.style.display="inline-block",t.nextElementSibling.nextElementSibling.style.display="inline-block")}))},u=function(){var e=document.querySelector("#accordion");e.querySelectorAll(".panel-heading").forEach((function(t){t.addEventListener("click",(function(n){var o=n.target;(o=o.closest(".panel-heading"),e.querySelectorAll(".collapse ").forEach((function(e){e.classList.remove("in")})),o===t)&&o.nextElementSibling.classList.add("in")}))}));var t=document.querySelector(".slideInDown");t.querySelectorAll(".panel-heading").forEach((function(e){e.addEventListener("click",(function(n){var o=n.target;(o=o.closest(".panel-heading"),t.querySelectorAll(".collapse ").forEach((function(e){e.classList.remove("in")})),o===e)&&o.nextElementSibling.classList.add("in")}))})),document.querySelectorAll('a[class="collapsed"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))}))};(function(){var e=Array.from(document.querySelectorAll('a[class = "call-btn"]')),t=document.querySelector(".popup-call"),n=t.querySelectorAll("input");e.forEach((function(e){e.addEventListener("click",(function(){t.style.display="block",n.forEach((function(e){e.setAttribute("required","true")}))}))})),t.addEventListener("click",(function(e){var o=e.target;o.classList.contains("popup-close")?(t.style.display="none",n.forEach((function(e){e.removeAttribute("required"),e.value=""}))):(o=o.closest(".popup-content"))||(t.style.display="none",n.forEach((function(e){e.value=""})))}))})(),o(),r(),l(),c(),i(),u()}]);