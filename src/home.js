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

    div.classList.add("translate-y-24", "flex", "flex-col", "gap-3");
    p1.classList.add("cursor-default", "ben", "text-center", "text-7xl", "tracking-wider", "text-orange-600");
    p2.classList.add("end", "w-6/12", "mx-auto", "text-4xl",
        "text-center", "text-[#ec6924]")

    p1.textContent = "Benny's"
    p2.textContent = "Passion for food, creation and experience"

    div.appendChild(p1)
    div.appendChild(p2)

    return div;

}