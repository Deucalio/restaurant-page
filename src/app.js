// export functions that make up the nav, section and footer

export function section() {
    const body = document.querySelector("body");

    const section = document.createElement("section")
    section.classList.add("min-h-screen", "bg-cover", "bg-center")

    body.appendChild(section)

}

export function nav() {

    const body = document.querySelector("body");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul")

    const li1 = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")

    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")

    p1.textContent = "Menu"
    p2.textContent = "Home"
    p3.textContent = "Contact"

    // adding classes
    nav.classList.add("h-24", "bg-[#0A0A0A]", "py-2", "px-12")
    ul.classList.add("flex", "justify-center", "gap-6", "sm:gap-9", "border-0", "border-sky-400", "py-3")

    p1.classList.add("btn")
    p2.classList.add("btn","homebtn")
    p2.classList.add("active")
    p3.classList.add("btn")

    // Adding to html
    body.appendChild(nav)
    nav.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)

    li1.appendChild(p1)
    li2.appendChild(p2)
    li3.appendChild(p3)

}

export function footer() {
    const body = document.querySelector("body");

    //     <footer class="bg-black h-9 py-1">
    //     <p class="text-lg text-slate-400 text-center tracking-normal">Proudly Created by Deucalio</p>
    // </footer> -->
    const footer = document.createElement("footer")
    const p = document.createElement("p")
    p.textContent = "Proudly Created by Deucalio"

    footer.classList.add("bg-black", "h-9", "py-1")
    p.classList.add("text-lg", "text-slate-400", "text-center", "tracking-normal")
    
    body.appendChild(footer)
    footer.appendChild(p)


}