window.addEventListener("load", () => {
  const swiperVisual = new Swiper(".swiper-visual", {
    speed: 0,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        console.log(index, className);
        return `
          <button class="${className}">
            <span class="blind">슬라이드${index + 1}번</span>
          </button>
        `;
      },
    },
  });
});