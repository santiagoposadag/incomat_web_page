"use strict";
const listAnchors = document.querySelectorAll('.go_to_section');
console.log(listAnchors);
listAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // const singleAnchorId:string | null  = anchor.getAttribute('href');
        // console.log(singleAnchorId);
        // const linkedTo = document.querySelector(singleAnchorId)
    });
});
