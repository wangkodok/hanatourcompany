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
    }

    function moveUp() {
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
});