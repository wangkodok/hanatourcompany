window.addEventListener("DOMContentLoaded", function () {
    // GSAP과 플러그인 등록
    const barArea = document.querySelector(".bar-area");
    const barElement = document.querySelector(".bar-element");
    const horizontalScroll = document.querySelector(".horizontal-scroll");
    const companyInfo = document.querySelector(".company-info");
  
    gsap.registerPlugin(Draggable, ScrollTrigger);
  
    // 모바일에서 터치 이벤트 처리
    companyInfo.style.touchAction = "none"; // 터치 이벤트 비활성화
  
    // 드래그 가능한 요소 생성
    Draggable.create(".company-info", {
      type: "x",
      bounds: {
        minX: -companyInfo.offsetWidth + horizontalScroll.clientWidth, // 패딩만큼 조정
        maxX: 0
      },
      inertia: true,
      edgeResistance: 0.5,
  
      onDrag: function () {
        // 드래그된 위치를 기반으로 비율 계산
        const totalDraggableWidth = companyInfo.offsetWidth - horizontalScroll.clientWidth; // 드래그 가능한 총 거리
  
        if (this.x > 0) {
          barElement.style.left = `${0}px`; // left 값 업데이트
          return; // 오른쪽으로 드래그하려 할 때 드래그 중지
        }
  
        const dragPercent = Math.abs(this.x / totalDraggableWidth); // 드래그된 위치를 비율로 변환
  
        // 비율에 따라 barElement의 left 위치를 조정
        let newLeft = dragPercent * (barArea.clientWidth - barElement.offsetWidth); // bar-area 크기에 따라 위치 계산
  
        // barArea의 크기를 벗어나지 않도록 제한
        newLeft = Math.max(0, Math.min(newLeft, barArea.clientWidth - barElement.offsetWidth));
  
        // barElement의 left 값 업데이트
        barElement.style.left = `${newLeft}px`; // left 값 업데이트
      },
    });
  
    // 브랜드상
    gsap.to(".sec-highlight .brand-2023 img", {
      duration: 0.8,
      rotateY: 0,
      scrollTrigger: {
        trigger: ".company-info", // 애니메이션 언제 시작?
        start: "0 50%",
        end: "50% 70%",
        // markers: true,
      }
    });
  
    // 연간 매출액 & 영업 이익
    // gsap.to(".sec-highlight .stats-area .data-year", {
    //   scrollTrigger: {
    //     trigger: ".company-info", // 애니메이션 언제 시작?
    //     start: "0 50%",
    //     end: "50% 70%",
    //     markers: true,
    //   },
    //   onEnter: () => {
    //     document.querySelector(".sec-highlight .stats-area .data-year").classList.add("active");
    //   },
    //   // onLeaveBack: () => {
    //   //   document.querySelector(".sec-highlight .stats-area .data-year").classList.remove("active");
    //   // },
    // });
    // 연간 매출액 & 영업 이익
    ScrollTrigger.create({
      trigger: ".sec-highlight .stats-area .data-year",
      start: "0 50%",
      end: "50% 70%",
      // markers: true, // 디버깅용 마커
      onEnter: () => {
        document.querySelector(".sec-highlight .stats-area .data-year").classList.add("active");
      }
    });
  
    // 업계 최대 상품 기획 인력
    gsap.to(".sec-highlight .stats-area .animation .data-user", {
      duration: 0.8,
      rotateY: 0,
      scrollTrigger: {
        trigger: ".company-info", // 애니메이션 언제 시작?
        start: "0 50%",
        end: "50% 70%",
        // markers: true,
      }
    });
  
    // 전체 누적 고객수
    gsap.to(".sec-highlight .metrics-area .animation .data-user", {
      duration: 0.8,
      rotateY: 0,
      scrollTrigger: {
        trigger: ".company-info", // 애니메이션 언제 시작?
        start: "0 50%",
        end: "50% 70%",
        // markers: true,
      }
    });
  
    // 송출객수
    gsap.to(".sec-highlight .metrics-area .animation .data-growth", {
      duration: 0.8,
      rotateX: 0,
      scrollTrigger: {
        trigger: ".company-info", // 애니메이션 언제 시작?
        start: "0 50%",
        end: "50% 70%",
        // markers: true,
      }
    });
  
    // 온라인 전체 회원수
    gsap.to(".sec-highlight .user-member .bg", {
      duration: 0.8,
      rotateX: 0,
      scrollTrigger: {
        trigger: ".company-info", // 애니메이션 언제 시작?
        start: "0 50%",
        end: "50% 70%",
        // markers: true,
      }
    });
  
    // since 1993
    gsap.to(".sec-highlight .growth .bg", {
      duration: 0.8,
      rotateY: 0,
      scrollTrigger: {
        trigger: ".company-info", // 애니메이션 언제 시작?
        start: "0 50%",
        end: "50% 70%",
        // markers: true,
      }
    });
  
    // 요소가 뷰포트에 들어오면 실행
    // const target = document.querySelector(".sec-highlight .esg");
    // console.log(target)
    // const img = document.querySelector(".sec-highlight .brand-2023 img");
  
    // // Intersection Observer 설정 (필요한 경우에만 사용)
    // const observer = new IntersectionObserver(function (entries) {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       console.log('들어온다.');
    //     }
    //   });
    // });
  
    // observer.observe(target);
    // 여러 대상 요소를 선택 (NodeList로 반환)
    const targets = document.querySelectorAll(".sec-highlight .esg .bg, .sec-highlight .operate .data-year, .sec-highlight .ccm img");
  
    // 대상 요소들 확인
    console.log("관찰할 요소들:", targets);
  
    // Intersection Observer 설정
    const observer = new IntersectionObserver(function (entries) {
      console.log(entries, "entries")
      entries.forEach((entry) => {
        console.log(entry.isIntersecting, "entry.isIntersecting")
        if (entry.isIntersecting) {
          console.log('들어온다:', entry.target); // 현재 뷰포트에 들어온 요소 출력
          // targets[0].classList.add("active"); // 1번째 요소
          // targets[1].classList.add("active"); // 2번째 요소
          // targets[2].classList.add("active"); // 3번째 요소
          entry.target.classList.add("active"); // 뷰포트에 들어온 요소만 활성화
        }
      });
    });
  
    // 각 요소에 대해 관찰 시작
    targets.forEach((target) => {
      observer.observe(target);
    });
  })