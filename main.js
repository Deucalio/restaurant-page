(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("p");return e.classList.add("translate-y-24","flex","flex-col","gap-3"),t.classList.add("cursor-default","ben","text-center","text-7xl","tracking-wider","text-orange-600"),n.classList.add("end","w-6/12","mx-auto","text-4xl","text-center","text-[#ec6924]"),t.textContent="Benny's",n.textContent="Passion for food, creation and experience",e.appendChild(t),e.appendChild(n),e}console.log("HELLO BROS"),function(){const e=document.querySelector("body"),t=document.createElement("nav"),n=document.createElement("ul"),c=document.createElement("li"),d=document.createElement("li"),a=document.createElement("li"),l=document.createElement("p"),s=document.createElement("p"),o=document.createElement("p");l.textContent="Menu",s.textContent="Home",o.textContent="Contact",t.classList.add("h-24","bg-[#0A0A0A]","py-2","px-12"),n.classList.add("flex","justify-center","gap-6","sm:gap-9","border-0","border-sky-400","py-3"),l.classList.add("btn"),s.classList.add("homebtn"),s.classList.add("active"),o.classList.add("btn"),e.appendChild(t),t.appendChild(n),n.appendChild(c),n.appendChild(d),n.appendChild(a),c.appendChild(l),d.appendChild(s),a.appendChild(o)}(),function(){const e=document.querySelector("body"),t=document.createElement("section");t.classList.add("min-h-screen","bg-cover","bg-center"),e.appendChild(t)}(),function(){const e=document.querySelector("body"),t=document.createElement("footer"),n=document.createElement("p");n.textContent="Proudly Created by Deucalio",t.classList.add("bg-black","h-9","py-1"),n.classList.add("text-lg","text-slate-400","text-center","tracking-normal"),e.appendChild(t),t.appendChild(n)}();const t=[...document.querySelectorAll("nav > ul > li > p")];document.querySelector("section").appendChild(e()),t.forEach((n=>n.addEventListener("click",(()=>{let c=t.find((e=>e.className.includes("active")));if(c.classList.remove("active"),"Home"===n.textContent){if(n.className.includes("active"))return;{n.classList.add("active");const t=document.querySelector("section");t.innerHTML="",t.appendChild(e())}}else if("Menu"===n.textContent){if(n.className.includes("active"))return;{n.classList.add("active");const e=document.querySelector("section");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");return e.innerHTML="HAHAH",e.classList.add("text-3xl","text-sky-400"),e}())}}}))))})();