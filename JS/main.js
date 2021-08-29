// let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
let menu = document.querySelector('.nav__menu');
let menuToggle = document.querySelector('.header__toggle');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.video__btn');
let expandClass = "is-expand";
// window.onscroll = () =>{
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active');
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// menu.addEventListener('click', () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// });

// searchBtn.addEventListener('click', () =>{
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
// });

// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () =>{
//     loginForm.classList.remove('active');
// });
menuToggle.addEventListener("click", function(event) {
    menu.classList.add(expandClass);
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
})
document.addEventListener("click", handleOut);
function handleOut(event) {
    if(!menu.contains(event.target) && !event.target.matches(".header__toggle")) {
        // console.log(event.target);
        menu.classList.remove(expandClass);
        menuToggle.classList.remove("fa-times");
        menuToggle.classList.add("fa-bars");

    }
}
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.home__controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         991: {
//           slidesPerView: 4,
//         },
//         1200: {
//           slidesPerView: 5,
//         },
//       },
// });