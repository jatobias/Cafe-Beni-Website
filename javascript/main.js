import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/beni.css'
import '../styles/components/beni2.css'
import '../styles/components/beni3.css'
import '../styles/components/beni4.css'
import '../styles/components/beni5.css'
import '../styles/components/beni6.css'
import '../styles/utility.css';

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
  