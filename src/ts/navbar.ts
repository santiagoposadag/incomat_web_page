//the list of sections where you can go 
const sections:string[] = ["Inicio", "Servicios","Nosotros", "Clientes", "Contacto"]
//The list of sections in the menu where you can go
let HTMLsections: HTMLDivElement[] = []
//the current place where you are standing at this moment
let currentPlace:string = 'Inicio'

const mobileNavbarContainer:HTMLDivElement | null = document.querySelector(".mobile_navbar_container") as HTMLDivElement 

const mobileNavbar:HTMLDivElement= document.querySelector(".mobile_navbar") as HTMLDivElement
const mobileNavBarSpan :HTMLSpanElement = document.createElement('span')
mobileNavBarSpan.className = 'mobile_navbar_span'
mobileNavbar.append(mobileNavBarSpan)
mobileNavBarSpan.innerText = currentPlace

const mobileMenuContainer:HTMLDivElement | null = document.createElement("div")
mobileMenuContainer.className = 'mobile_menu_container'
mobileMenuContainer.classList.add('display_none')

//Adding the sections to the menu that is being displayed
sections.forEach((title, index) => {
  let div:HTMLDivElement = document.createElement("div")
  let aTag:HTMLAnchorElement = document.createElement('a')
  aTag.href = `#target${index}`
  aTag.className = "go_to_section"
  let span:HTMLSpanElement = document.createElement('span')
  span.classList.add('button')
  span.classList.add('main_menu_button')
  aTag.append(span)
  div.append(aTag)
  span.addEventListener('click',() => changeCurrentPlace(span))
  const className:string = `${title}_menu_container`
  div.className = className
  div.classList.add('display_none')
  span.innerHTML = title
  HTMLsections.push(div)
  mobileMenuContainer.append(div)
})


function changeCurrentPlace(span:HTMLSpanElement){
  const mobileNavbarSpan = document.querySelector('.mobile_navbar_span') as HTMLSpanElement
  console.log(span.innerText);
  mobileNavbarSpan.innerText = span.innerText
  toggleMenu()
}

mobileNavbarContainer?.append(mobileMenuContainer)

const dropDown:HTMLDivElement|null = document.querySelector('.drop_down')

dropDown?.addEventListener('click', toggleMenu)
const contentBlocker = document.querySelector('.content_blocker') as HTMLDivElement;
contentBlocker.addEventListener('click', toggleMenu)

function toggleMenu(){
  if(mobileMenuContainer?.classList.contains('display_none')){
    contentBlocker.classList.remove('display_none') 
    mobileMenuContainer.classList.remove('display_none')
    HTMLsections.forEach(section => section.classList.remove('display_none'))
    return
  }
  contentBlocker.classList.add('display_none') 
  mobileMenuContainer?.classList.add('display_none')
  HTMLsections.forEach(section => section.classList.add('display_none'))
}



// const form = document.querySelector(".contact_me_form") as HTMLFormElement;
// form.addEventListener('submit', (e) => manageForm(e))
// function manageForm(e:SubmitEvent){
//   console.log(e);

// }
