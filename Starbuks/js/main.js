const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  //Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색"); // attribute를 추가하는 매소드입니다. 추가할 속성, 그리고 내용을 입력합니다.
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", ""); // attribute를 추가하는 매소드입니다. 추가할 속성, 그리고 내용을 입력합니다.
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //badgeEl.style.display = "none";

      //버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      //badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
); //0.3초
// ._throttle(함수, 시간(ms))
//함수가 수십개가 한번에 실행되는데, 0.3 초 단위로 부하를 주어 함수가 많이 사용되는 것을 막음

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7 1.4 2.1 2.8
    opacity: 1,
  });
});

// new Swiper (선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
}); // new는 생성자를 의미하며 클래스 생성자를 의미합니다.

// new Swiper (선택자, 옵션)
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복해서 슬라이드 배치하기
  autoplay: {
    delay: 5000, //ms
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자가 번호 요소를 클릭하여 제어가 가능해짐
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
}); // 슬라이드의 가운데 이미지는 클래스명+'-active'라는 클래스 이름을 지닙니다.

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    // hide 클래스 지닌 경우, 숨김 처리하는 CSS 필요
    promotionEl.classList.add("hide");
  } else {
    // 화면 출력 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease: Power1.easeInOut, // 타이밍 함수를 이용하여 제어
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여질 여부에 대하여 감시할려고 하는 요소를 지정
    triggerHook: 0.8, // 뷰포트의 시작을 0, 끝을 1로 가정했을 때 해당 지점에 걸리면 실행됨을 의미
  })
    .setClassToggle(spyEl, "show") // 토글을 할 클래스 요소 지정, 넣었다 뻈다 할 클래스 이름
    .addTo(new ScrollMagic.Controller());
  // scene : 스크롤 할 때 화면이 보이는지 안보이는 지 감시하기 위함
  // setClassToggle : class를 토글처럼 켜고 끌 수 있는 기능
  // addTo : 스크롤 매직이 필요한 곳에 컨트롤러를 추가하기 위함
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2022
