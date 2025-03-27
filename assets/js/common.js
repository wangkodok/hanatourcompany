window.addEventListener("DOMContentLoaded", () => {
  // lnb 마우스 오버, 아웃 실행
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");

  function NavMouseOver() {
    header.classList.add("active");
  };

  function HeaderMouseOut() {
    header.classList.remove("active");
  };

  // nav 마우스 오버하고 마우스 아웃할 때는 header
  nav.addEventListener("mouseenter", NavMouseOver);
  header.addEventListener("mouseleave", HeaderMouseOut);

  // 검색 순위 자동으로 실행
  function searchRankings() {
    let list = document.querySelector("#rankings-list");
    let ItemSize = document.querySelector(".search-rankings");
    let items = list.children;
    let position = 0;

    function updateItemSize() {
      ItemSize = document.querySelector(".search-rankings");  // Recalculate item size
      position = -ItemSize.offsetHeight; // 현재 높이를 반영하여 위치 업데이트
      list.style.transform = `translateY(${position}px)`;
    }

    function moveUp() {
      ItemSize = document.querySelector(".search-rankings");
      position = position - ItemSize.offsetHeight; // 아이템 사이즈만큼 위로 이동
      list.style.transform = `translateY(${position}px)`;

      // 첫 번째 요소를 마지막으로 이동 (무한 스크롤 효과)
      setTimeout(() => {
        let firstItem = items[0];

        // 아래에서 올라오는 애니메이션 적용
        firstItem.classList.add("slide-in");

        list.appendChild(firstItem);
        list.style.transition = "none";
        position = position + ItemSize.offsetHeight;
        list.style.transform = `translateY(${position}px)`;

        // 애니메이션 효과 초기화 (다음 이동 시 다시 적용 가능하도록)
        setTimeout(() => {
          firstItem.classList.remove("slide-in");
          list.style.transition = "transform 0.5s ease";
        }, 50);
      }, 500);
    }

    window.addEventListener("resize", updateItemSize);

    setInterval(moveUp, 2000); // 2초마다 실행
  }

  searchRankings();

  // 모바일에서 햄버거 메뉴 클릭 시 메뉴 열림/닫힘
  const hambergerWrap = document.querySelector(".hamberger-wrap");
  const hambergerMenu = document.querySelector("#hambergerMenu");
  const hambergerMenuClose = document.querySelector("#menu-close");
  hambergerMenu.addEventListener("click", () => {
    hambergerWrap.classList.add("active");
  });
  
  hambergerMenuClose.addEventListener("click", () => {
    hambergerWrap.classList.remove("active");
  });

  // 모바일에서 GNB 메뉴 클릭 시 메뉴 열림/닫힘
  function hambergerAccordionList() {
    const list = document.querySelectorAll(".hamberger-gnbitem");
  
    list.forEach((item) => {
      item.addEventListener("click", () => {
        const height = item.querySelector(".hamberger-lnb").offsetHeight;
        const lnbwrap = item.querySelector(".hamberger-lnbwrap");
        
        if (lnbwrap.style.visibility === "visible") {
          item.querySelector(".arrow").classList.remove("active");
          lnbwrap.style.height = "0px";
          lnbwrap.style.visibility = "hidden";
        } else {
          // 반복문을 사용해서 열렸던 메뉴 클릭하면 닫힘
          for (let i = 0; i < list.length; i++) {
            list[i].querySelector(".arrow").classList.remove("active")
            list[i].querySelector(".hamberger-lnbwrap").style.height = "0px";
            list[i].querySelector(".hamberger-lnbwrap").style.visibility = "hidden";
          }
          lnbwrap.style.height = `${height}px`;
          lnbwrap.style.visibility = "visible";
          item.querySelector(".arrow").classList.add("active");
        };
      });
    });
  };
  
  hambergerAccordionList();

  // 버튼 클릭 시 영상 재생, 정지
  // const videoPlayer = document.querySelector("#video-player");
  // const video = document.querySelector(".video")
  // videoPlayer.addEventListener("click", function () {
  //   if (video.paused || video.ended) {
  //     video.play(); // 재생
  //     videoPlayer.classList.remove("active");
  //   } else {
  //     video.pause(); // 정지
  //     videoPlayer.classList.add("active");
  //   }
  // });
});