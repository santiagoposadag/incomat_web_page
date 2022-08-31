
// const listAnchors = document.querySelectorAll('.go_to_section') as NodeListOf<HTMLAnchorElement>
// console.log(listAnchors);

// listAnchors.forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       // const singleAnchorId:string | null  = anchor.getAttribute('href');
//       // console.log(singleAnchorId);

//       // const linkedTo = document.querySelector(singleAnchorId)
//   });
// });


const link = document.querySelector('.go_to_section_contacto') as HTMLAnchorElement;

link.addEventListener('click', (e) => {e.preventDefault()
  console.log('desde el link hacia el contacot');
  
  const section = document.querySelector('#target4') as HTMLHeadingElement;
  console.log(section);
  
  section.scrollIntoView({
    behavior:'smooth'
  })
})



