export function menu() {
    // creating wrapper div so we can return div1 and div2 wrapped in this element;
    const wrapper = document.createElement("div")
    const div1 = document.createElement("div")
    div1.classList.add("h-full", "-mt-5", "px-6", "pt-10", "w-3/4", "lg-w:1/2", "xl:w-1/3", "mx-auto", "mb-6")

    // paragraph variables are named on their textContent
    const the = document.createElement("p")
    the.classList.add("the", "text-8xl", "text-center", "text-[#ec6924]", "tracking-wide")
    the.textContent = "the"

    div1.appendChild(the);

    const menu = document.createElement("p")
    menu.classList.add("menu", "text-5xl", "text-[#ec6924]", "text-right", "mr-5", "tracking-widest")
    menu.textContent = "MENU"

    div1.appendChild(menu)

    const div2 = document.createElement("div")
    div2.classList.add("-mt-5", "rounded-xl", "py-3", "px-6", "w-3/4", "lg:w-1/2", "xl:w-1/3", "mx-auto", "bg-black/60")



    const appetizers = document.createElement("p")
    appetizers.textContent = "Appetizers"
    appetizers.classList.add("main-head")
    const dishes1 = document.createElement("div")
    dishes1.classList.add("dishes")



    const TT = document.createElement("p")
    TT.textContent = "Tuna Tartare"

    const PTC = document.createElement("p")
    PTC.textContent = "Petite Crab Cakes"

    dishes1.appendChild(TT)
    dishes1.appendChild(PTC)

    div2.appendChild(appetizers)
    div2.appendChild(dishes1)



    const entrees = document.createElement("p")
    entrees.textContent = "Entrees"
    entrees.classList.add("main-head")
    const dishes2 = document.createElement("div")
    dishes2.classList.add("dishes")



    const PRS = document.createElement("p")
    PRS.textContent = "Pan Roasted Salmon"

    const BPR = document.createElement("p")
    BPR.textContent = "Bone-in Prime Ribeye"

    dishes2.appendChild(PRS)
    dishes2.appendChild(BPR)

    div2.appendChild(entrees)
    div2.appendChild(dishes2)







    const desserts = document.createElement("p")
    desserts.textContent = "desserts"
    desserts.classList.add("main-head")
    const dishes3 = document.createElement("div")
    dishes3.classList.add("dishes")


    const CM = document.createElement("p")
    CM.textContent = "Chocolate Mousse"

    const BC = document.createElement("p")
    BC.textContent = "Berries and Cream"

    dishes3.appendChild(CM)
    dishes3.appendChild(BC)

    div2.appendChild(desserts)
    div2.appendChild(dishes3)


    wrapper.appendChild(div1)
    wrapper.appendChild(div2)

    return wrapper;

}