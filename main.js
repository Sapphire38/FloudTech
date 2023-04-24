var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var cTajr;

  if ($(window).width() < 960) {
    cTajr = 1;
    
document.querySelector(".col-reverse").classList.add("flex-column-reverse");
  } else{
    cTajr= 2;
  }
 


var swiperD = new Swiper(".mySwipers", {

  slidesPerView: cTajr,
  spaceBetween: 30,
  slidesPerGroup: cTajr,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperD = new Swiper(".mySwipersd", {

  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



let nav = document.getElementById("nav-btn").addEventListener('click', opacity)


let collapse = document.getElementById("navbarNavDropdown")
let contador = 0
function opacity(){
  if(contador == 0){
    collapse.style.display = "none"
    setTimeout(visible,  700)
  }else{
    return
  }


}

function visible(){
  collapse.style.display = "flex"
}

document.getElementById("btn-nos").addEventListener('click', ocularCollapce)
document.getElementById("btn-serv").addEventListener('click', ocularCollapce)
document.getElementById("btn-impact").addEventListener('click', ocularCollapce)
document.getElementById("btn-client").addEventListener('click', ocularCollapce)


function ocularCollapce(){
  collapse.classList.remove("show")
}


