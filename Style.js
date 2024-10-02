window.onscroll = () => {
  document.querySelector(".stars").style.transform = "scale(" + (500 - scrollY) / 500 + ")";
  document.querySelector(".asteroids").style.transform = "scale(" + (1400 - scrollY) / 1400 + ")";
  document.querySelector(".planets").style.transform = "scale(" + (3000 - scrollY) / 3000 + ")";
  document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";
  document.querySelector(".Home h1").style.opacity = (80 - scrollY) / 80;
};

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  sections.forEach(section => {
      observer.observe(section);
  });
});
window.addEventListener('scroll', function() {
    const parallaxText = document.querySelector('.Home h1');
    let scrollPosition = window.pageYOffset;
    parallaxText.style.transform = 'translateX(' + scrollPosition * -0.5 + 'px)';
});
