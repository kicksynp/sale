var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // animation on scroll
  AOS.init();
});
/*-----------------close nav when clicking on a  nav item------------*/
document.addEventListener("click", function (e) {
  if (e.target.closest(".menu")) {
    toggleNav();
  }
});
// hash remover from tab

document.addEventListener("DOMContentLoaded", () => {
  // Detect hash changes
  window.addEventListener("hashchange", () => {
    // Use history.replaceState to remove the hash from the URL
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  });

  // Optionally remove the hash when the page loads
  if (window.location.hash) {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  }
});
