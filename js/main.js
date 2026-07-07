// Mjuk intoning när innehåll scrollas in i bild.
// Progressiv förbättring: utan js visas allt direkt (klassen .reveal
// sätts först här), och prefers-reduced-motion stänger av allt i css.

const mal = document.querySelectorAll(
  '.hero-inre, .sektion > *, .bild, .block, .steg li, .pelare, .slut-cta-inre > *'
);

const observer = new IntersectionObserver(
  (poster) => {
    poster.forEach((post) => {
      if (post.isIntersecting) {
        post.target.classList.add('syns');
        observer.unobserve(post.target);
      }
    });
  },
  { threshold: 0.15 }
);

mal.forEach((el, i) => {
  el.classList.add('reveal');
  // liten förskjutning så grupper tonar in i följd
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});
