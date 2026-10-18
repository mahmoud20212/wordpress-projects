const mql = window.matchMedia("(max-width: 992px)");

const changeSlideView = (slide) => {
  if (!document.querySelector(".swiper") || typeof Swiper === "undefined")
    return;
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const handleOrientationChange = (e) => {
  if (mql.matches) {
    changeSlideView(1);
  } else {
    changeSlideView(3);
  }
};

handleOrientationChange();

mql.onchange = (e) => {
  handleOrientationChange(e);
};

const year = document.getElementById("year");
if (year) year.innerHTML = new Date().getFullYear();

$("#commentform").submit(function () {
  if ($("#comment").val() === "") {
    $(".error-message").fadeIn();
    return false;
  }
});
