function animateSkills() {
  const skillProgresses = document.querySelectorAll('.progress');
  skillProgresses.forEach(bar => {
    const value = bar.getAttribute('data-progress');
    bar.style.width = value;
  });
}

// Animate when skills section enters viewport
function onScroll() {
  const skillsSection = document.querySelector('.skills-section');
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    animateSkills();
    window.removeEventListener('scroll', onScroll); // Run once
  }
}

window.addEventListener('scroll', onScroll);

function animateSkills() {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    const target = bar.getAttribute("data-progress");
    bar.style.width = target;
  });
}

function onScroll() {
  const section = document.querySelector(".skills-section");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    animateSkills();
    window.removeEventListener("scroll", onScroll); // Run once
  }
}

window.addEventListener("scroll", onScroll);


// document.getElementById("menuToggle").addEventListener("click", () => {
//   document.getElementById("navLinks").classList.toggle("show");
// });



  function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
  }


  const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission for custom handling

    const form = e.target;
    const popup = document.getElementById('popupMessage');

    // Submit the form using Fetch API
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        popup.style.display = 'block';
        form.reset(); // Clear the form
        setTimeout(() => {
          popup.style.display = 'none';
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }).catch(error => {
      alert("Error sending form: " + error.message);
    });
  });
