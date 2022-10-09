console.log("HELLO BROS")

import {
    nav,
    section,
    footer
} from "./app"
import {
    home
} from "./home";
import {
    menu
} from "./menu"

nav();
section();
footer();

const btns = [...document.querySelectorAll(".btn")];

const sectionElem = document.querySelector("section");
sectionElem.appendChild(home());

btns.forEach(btn => btn.addEventListener("click", () => {
        let activeBtn = btns.find(btn => btn.className.includes("active"));
        activeBtn.classList.remove("active")

        if (btn.textContent === "Home") {
            // if the button is active do literally nothing
            if (btn.className.includes("active")) {
                console.log("home is active")
                return;
            } else {
                btn.classList.add("active")
                const sectionElem = document.querySelector("section");
                sectionElem.innerHTML = "";
                sectionElem.appendChild(home());
            }
        } else if (btn.textContent === "Menu") {
            btn.classList.add("active")
            const sectionElem = document.querySelector("section");
            sectionElem.innerHTML = "";


            console.log("HELLO MENU")
            sectionElem.appendChild(menu());
        }
    }

))