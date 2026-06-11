import Swiper from 'swiper';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.querySelectorAll('[data-agenda-teaser]').forEach((el) => {
  const swiper = new Swiper(el, {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    autoHeight: true,
    
    observer: true,
    observeParents: true,
    resizeObserver: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    navigation: {
      nextEl: el.querySelector('.swiper-btn-next'),
      prevEl: el.querySelector('.swiper-btn-prev'),
    },
  });

  window.addEventListener('load', () => {
    swiper.update();
  });
});