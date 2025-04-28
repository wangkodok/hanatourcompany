window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const swiperVisual = new Swiper(".swiper-visual", {
    speed: 0,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <button class="${className}">
            <span class="blind">슬라이드${index + 1}번</span>
          </button>
        `;
      },
    },
  });

  // 비주얼 슬라이더 버튼 클릭 시 영상 재생/정지 버튼
  const visualSlide = document.querySelectorAll("#visual-slide .swiper-slide");
  const paginationBullets = document.querySelectorAll('.swiper-pagination button');
  const videoPlayer = document.querySelector("#video-player");
  // const video = document.querySelectorAll(".video");

  const buttonActive = "swiper-pagination-bullet-active";
  paginationBullets.forEach((buttonItem) => {
    buttonItem.addEventListener("click", () => {
      if (!buttonItem.classList.contains(buttonActive)) {
        visualSlide.forEach((item) => {
          item.querySelector(".video").play();
          videoPlayer.classList.remove("active");
        });
      };
    });
  });

  videoPlayer.addEventListener("click", () => {
    visualSlide.forEach((item) => {
      if (item.classList.contains("swiper-slide-active")) {
        if (item.querySelector(".video").paused || item.querySelector(".video").ended) {
          item.querySelector(".video").play(); // 재생
          videoPlayer.classList.remove("active");
        } else {
          item.querySelector(".video").pause(); // 정지
          videoPlayer.classList.add("active");
        };
      };
    });
  });
});