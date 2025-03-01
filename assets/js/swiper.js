window.addEventListener("load", () => {
    // 화면 크기를 확인하고 Swiper 초기화
    let swiper = null; // Swiper 인스턴스 저장 변수
  
    function initSwiper() {
      if (window.innerWidth <= 782) {
        if (!swiper) { // Swiper가 이미 초기화되지 않았다면
          swiper = new Swiper(".swiper-highlight", {
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
            slidesPerView: 1.5, // 중앙 100%, 양측 50%
            centeredSlides: true, // 활성 슬라이드를 중앙에 배치
            spaceBetween: 16, // 슬라이드 간격
            loop: true, // 슬라이드 반복 활성화
            loopedSlides: 1,
            initialSlide: 0, // 첫 슬라이드를 중앙으로 설정
            on: {
              init: function (e) {
                e.slideToLoop(0, 0, false); // 첫 번째 슬라이드를 중앙으로 이동
              },
            },
          });
        }
      } else {
        if (swiper) { // Swiper가 초기화되어 있다면 제거
          swiper.destroy(true, true); // Swiper 인스턴스 삭제
          swiper = null; // 변수 초기화
        }
      }
    }
  
    // 페이지 로드 시 Swiper 초기화
    initSwiper();
  
    // 화면 크기 변경 시 Swiper 초기화
    window.addEventListener("resize", initSwiper);

    const swiperEsgControlText = new Swiper(".swiper-control-text", {
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 4,
          allowTouchMove: true,
          noSwiping: false,
          simulateTouch: true,
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const swiperEsgControlImage = new Swiper(".swiper-esg-control-image", {
      spaceBetween: 0,
      effect: "fade",
      thumbs: {
        swiper: swiperEsgControlText,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    });
  });
  