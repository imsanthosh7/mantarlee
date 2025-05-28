// Mobile Menu Toggle 
const menuBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  // window.navigator.vibrate([200])


  // Toggle icon
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");

  // Close all submenus when nav closes
  if (!isOpen) {
    closeAllSubmenus();
  }
});


// Accordion Main Menu Toggle
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = button.classList.contains("active");

  // Close all accordion items
  document.querySelectorAll(".accordion-toggle").forEach(btn => {
    btn.classList.remove("active");
    btn.nextElementSibling.style.display = "none";
  });

  // Open the selected one if it wasn't already open
  if (!isOpen) {
    button.classList.add("active");
    content.style.display = "block";
  }
}


// Nested Accordion (Submenu) Toggle 
function toggleNested(button) {
  const content = button.nextElementSibling;
  const isOpen = button.classList.contains("active");

  const parent = button.closest(".accordion-content");
  if (!parent) return;

  // Close all sibling nested items
  parent.querySelectorAll(".nested-toggle").forEach(btn => {
    if (btn !== button) {
      btn.classList.remove("active");
      btn.nextElementSibling.style.display = "none";
    }
  });

  // Toggle current nested item
  if (!isOpen) {
    button.classList.add("active");
    content.style.display = "block";
  } else {
    button.classList.remove("active");
    content.style.display = "none";
  }
}


//  Close all accordions & nested 
function closeAllSubmenus() {
  // Close main accordions
  document.querySelectorAll(".accordion-toggle").forEach(btn => {
    btn.classList.remove("active");
    btn.nextElementSibling.style.display = "none";
  });

  // Close nested accordions
  document.querySelectorAll(".nested-toggle").forEach(btn => {
    btn.classList.remove("active");
    btn.nextElementSibling.style.display = "none";
  });
}



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




document.addEventListener("DOMContentLoaded", function () {

  const yrSpan = document.getElementById("year");
  const currentYr = new Date().getFullYear();
  yrSpan.textContent = currentYr;

})



// counter animation 

const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true;
    }
  });
}, {
  threshold: 0.3,
});

observer.observe(document.getElementById('counters'));



