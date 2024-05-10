// window.onscroll = miFunction

// function miFunction (){
//     let scroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrolled = (scroll/ height)*100
//     document.getElementById('bar').style.width = scrolled +'%'
// }

// const imagen = document.querySelector('.img-1');

// const opciones = {
//   root: null,
//   rootMargin: '0px', 
//   threshold: 0.5 // 
// };


// function handleIntersection(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {

//       console.log('La imagen es visible ahora');
//       observer.unobserve(entry.target);
//     }
//   });
// }
// const observer = new IntersectionObserver(handleIntersection, opciones);

// observer.observe(imagen);

// window.onscroll = miFunction

// function miFunction (){
//     let scroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrolled = (scroll/ height)*100
//     document.getElementById('bar').style.width = scrolled +'%'
// }
// window.onscroll = miFunction

// function miFunction (){
//     let scroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrolled = (scroll/ height)*100
//     document.getElementById('bar').style.width = scrolled +'%'
// }
window.onscroll = miFunction

function miFunction (){
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll/ height)*100
    document.getElementById('bar').style.width = scrolled +'%'
}

const imagen = document.querySelector('.img-1');

const opciones = {
  root: null,
  rootMargin: '0px', 
  threshold: 0.5 // 
};


function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      console.log('La imagen es visible ahora');
      observer.unobserve(entry.target);
    }
  });
}
const observer = new IntersectionObserver(handleIntersection, opciones);

observer.observe(imagen);

window.addEventListener('scroll', function() {
  var elemento = document.getElementById('mi-elemento');

  if (window.scrollY > 100) {
      elemento.classList.add('efecto-scroll');
  } else {
      elemento.classList.remove('efecto-scroll');
  }
});
