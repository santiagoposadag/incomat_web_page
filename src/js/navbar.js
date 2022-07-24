"use strict";
//the list of sections where you can go 
const sections = ["prueba1", "prueba2", "prueba3"];
//The list of sections in the menu where you can go
let HTMLsections = [];
//the current place where you are standing at this moment
let currentPlace = 'Inicio';
const mobileNavbarContainer = document.querySelector(".mobile_navbar_container");
const mobileNavbar = document.querySelector(".mobile_navbar");
const mobileNavBarSpan = document.createElement('span');
mobileNavBarSpan.className = 'mobile_navbar_span';
mobileNavbar.append(mobileNavBarSpan);
mobileNavBarSpan.innerText = currentPlace;
const mobileMenuContainer = document.createElement("div");
mobileMenuContainer.className = 'mobile_menu_container';
mobileMenuContainer.classList.add('display_none');
//Adding the sections to the menu that is being displayed
sections.forEach(title => {
    let div = document.createElement("div");
    let span = document.createElement('span');
    div.append(span);
    span.addEventListener('click', () => changeCurrentPlace(span));
    const className = `${title}_menu_container`;
    div.className = className;
    div.classList.add('display_none');
    span.innerHTML = title;
    HTMLsections.push(div);
    mobileMenuContainer.append(div);
});
function changeCurrentPlace(span) {
    const mobileNavbarSpan = document.querySelector('.mobile_navbar_span');
    console.log(span.innerText);
    mobileNavbarSpan.innerText = span.innerText;
    toggleMenu();
}
mobileNavbarContainer === null || mobileNavbarContainer === void 0 ? void 0 : mobileNavbarContainer.append(mobileMenuContainer);
const dropDown = document.querySelector('.drop_down');
dropDown === null || dropDown === void 0 ? void 0 : dropDown.addEventListener('click', toggleMenu);
function toggleMenu() {
    console.log(mobileMenuContainer === null || mobileMenuContainer === void 0 ? void 0 : mobileMenuContainer.classList.contains('display_none'));
    if (mobileMenuContainer === null || mobileMenuContainer === void 0 ? void 0 : mobileMenuContainer.classList.contains('display_none')) {
        mobileMenuContainer.classList.remove('display_none');
        HTMLsections.forEach(section => section.classList.remove('display_none'));
        return;
    }
    mobileMenuContainer === null || mobileMenuContainer === void 0 ? void 0 : mobileMenuContainer.classList.add('display_none');
    HTMLsections.forEach(section => section.classList.add('display_none'));
}
