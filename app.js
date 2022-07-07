const menuToggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });

  menuToggle.addEventListener('click', function(e) {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
  })
 
