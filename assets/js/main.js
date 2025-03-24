window.addEventListener("load", () => {
  document.body.classList.add("loaded");
    
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

  // 비주얼 슬라이더 버튼 클릭 시 영상 재생/정지 버튼
  const visualSlide = document.querySelectorAll("#visual-slide .swiper-slide");
  const paginationBullets = document.querySelectorAll('.swiper-pagination button');
  const videoPlayer = document.querySelector("#video-player");
  const video = document.querySelectorAll(".video");
  
  const buttonActive = "swiper-pagination-bullet-active";
  paginationBullets.forEach((buttonItem) => {
    buttonItem.addEventListener("click", () => {
      if (!buttonItem.classList.contains(buttonActive)) {
        console.log(buttonItem, "buttonItem");
        visualSlide.forEach((item) => {
          item.querySelector(".video").play();
          videoPlayer.classList.remove("active");
        })
      };
    });
  });
  
  videoPlayer.addEventListener("click", () => {
    visualSlide.forEach((item) => {
      if (item.classList.contains("swiper-slide-active")) {
        // console.log(item.querySelector(".video").pause());
        if (item.querySelector(".video").paused || item.querySelector(".video").ended) {
          item.querySelector(".video").play(); // 재생
          videoPlayer.classList.remove("active");
        } else {
          item.querySelector(".video").pause(); // 정지
          videoPlayer.classList.add("active");
        }
        // console.log(item.classList.contains("swiper-slide-active"));
      };
    });
  });

  // 각 버튼 안에 있는 .blind 요소 찾기
  // paginationBullets.forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     if (videoPlayer.classList.contains("active")) {
  //       console.log(item, "item 아이템");
  //       videoPlayer.classList.add("active");
  //     }
  //     video.forEach((videoItem) => {
  //       videoItem.play(); // 재생
  //       videoPlayer.classList.remove("active");
  //     });
  //   });
  // });



  // video.forEach((item) => {
  //   let isVideoPlayButton = true;
  //   videoPlayer.addEventListener("click", function () {
  //     // if (item.paused || item.ended) {
  //     //   item.play(); // 재생
  //     // } else {
  //     //   item.pause(); // 정지
  //     // }

  //     if (isVideoPlayButton) {
  //       item.pause(); // 정지
  //       videoPlayer.classList.add("active");
  //       isVideoPlayButton = false;
  //     } else {
  //       item.play(); // 재생
  //       videoPlayer.classList.remove("active");
  //       isVideoPlayButton = true;
  //     }
  //   });
  // });
});