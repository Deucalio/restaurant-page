export function contact(){
    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper","contact-font","mb-6")

    const div = document.createElement("div")
    div.classList.add("mx-auto","h-16","w-4/5","border-b-2","border-orange-600")
    

    const p = document.createElement("p")
    p.classList.add("end","mx-auto","mt-16","w-4/5","text-center","text-6xl","text-[#ec6942]")
    p.textContent = "Benny's at your service!"

    const container = document.createElement("div")
    container.classList.add("container","mx-auto","mt-5")

    const ul = document.createElement("ul")
    ul.classList.add("mx-auto","grid","grid-cols-2","gap-y-4","px-4","lg:w-3/4","lg:grid-cols-4","lg:gap-6","lg:px-11")

    const li1 = document.createElement("li")
    li1.classList.add("contactli")
    const li2 = document.createElement("li")
    li2.classList.add("contactli")
    const li3 = document.createElement("li")
    li3.classList.add("contactli")
    const li4 = document.createElement("li")
    li4.classList.add("contactli")

    const p1 = document.createElement("p")
    p1.classList.add("contactp")
    p1.textContent = "06 - 94 473 516"

    const p2 = document.createElement("p")
    p2.classList.add("contactp")
    p2.textContent = "Ben@bennys.ML"

    const p3 = document.createElement("p")
    p3.classList.add("contactp")
    p3.textContent = "801 Brickell Ave, Miami"

    const p4 = document.createElement("p")
    p4.classList.add("contactp")
    p4.textContent = "Opens 6-11pm"

    container.appendChild(ul)
    ul.appendChild(li1)
    li1.innerHTML = `<svg class="w-12 text-fuchsia-600/90" viewBox="0 0 24 24">
    <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
  </svg>`
  li1.appendChild(p1)

    ul.appendChild(li2)
    li2.innerHTML = `<svg class="w-12 text-fuchsia-600/90" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
  </svg>`
  li2.appendChild(p2)

    ul.appendChild(li3)
    li3.innerHTML = `<svg class="w-12 text-fuchsia-600/90" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
  </svg>`
  li3.appendChild(p3)

  ul.appendChild(li4)
  li4.innerHTML = `<svg class="w-12 text-fuchsia-600/90" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z" />
</svg>`
li4.appendChild(p4)

container.appendChild(ul)
wrapper.appendChild(div)
wrapper.appendChild(p)
wrapper.appendChild(container)

return wrapper;

}
