// navbar section 
const menuBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});



function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = button.classList.contains('active');

  // Close all accordions
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.classList.remove('active');
    btn.nextElementSibling.style.display = 'none';
  });

  if (!isOpen) {
    button.classList.add('active');
    content.style.display = 'block';
  }
}

function toggleNested(button) {
  const content = button.nextElementSibling;
  const isOpen = button.classList.contains('active');

  // Close siblings only
  const parent = button.closest('.accordion-content');
  parent.querySelectorAll('.nested-toggle').forEach(btn => {
    if (btn !== button) {
      btn.classList.remove('active');
      btn.nextElementSibling.style.display = 'none';
    }
  });

  if (!isOpen) {
    button.classList.add('active');
    content.style.display = 'block';
  } else {
    button.classList.remove('active');
    content.style.display = 'none';
  }
}





// swiper 

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


// Go to Top button
const goToTopButton = document.getElementById('go-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goToTopButton.style.display = 'flex';
  } else {
    goToTopButton.style.display = 'none';
  }
});

goToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const ScrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}
ScrollReveal().reveal(".move-up", {
  ...ScrollRevealOptions,
  interval: 300,
})

const ScrollRevealleft = {
  distance: "50px",
  origin: "left",
  duration: 1400,
}
ScrollReveal().reveal(".move-left", {
  ...ScrollRevealleft,
})

const ScrollRevealright = {
  distance: "50px",
  origin: "right",
  duration: 1400,
}
ScrollReveal().reveal(".move-right", {
  ...ScrollRevealright,
})

// const modal = document.getElementById('linkedinModal');
// const iframe = document.getElementById('linkedinIframe');
// const originalSrc = iframe.src;

// modal.addEventListener('hidden.bs.modal', () => {
//   iframe.src = '';
//   setTimeout(() => {
//     iframe.src = originalSrc;
//   }, 200); // delay to avoid flicker
// });

document.addEventListener("DOMContentLoaded", function () {

  const yrSpan = document.getElementById("year");
  const currentYr = new Date().getFullYear();
  yrSpan.textContent = currentYr;

})