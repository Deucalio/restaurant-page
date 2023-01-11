/* <section class="h-full bg-cover bg-center content home-active">
    <div class="translate-y-24 flex flex-col gap-3">
        <p class="cursor-default ben text-center text-7xl tracking-wider text-orange-600">Benny's</p>
      <p class="end w-6/12 mx-auto text-4xl text-center text-[#ec6924]">Passion for food, creation and experience</p>
    </div>
  </section> */

export function home() {
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    div.innerHTML = ` <svg class="mx-auto w-24 text-orange-600" style="" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z"
    />
  </svg>`

    div.classList.add("translate-y-24", "flex", "flex-col", "gap-3");
    p1.classList.add("cursor-default", "ben", "text-center", "text-7xl", "tracking-wider", "text-orange-600");
    p2.classList.add("end", "w-6/12", "mx-auto", "text-4xl",
        "text-center", "text-[#ec6924]")

    p1.textContent = "Ben"
    p2.textContent = "Passion for food, creation and experience"

    div.appendChild(p1)
    div.appendChild(p2)

    return div;

}
