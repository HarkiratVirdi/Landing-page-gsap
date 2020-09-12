const cursor = document.querySelector(".cursor-round");
const loadingHeading = document.querySelector(".loader h1");

document.documentElement.addEventListener("mousemove", function (event) {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

console.log(cursor);

// anime({
//   targets: loadingHeading,
//   translateX: 270,
//   delay: anime.stagger(100),
// });

let animation = gsap.timeline();

function init() {
  gsap.set(".loader h1", { autoAlpha: 1 });
  animation.from(".loader h1", { y: -100, opacity: 0, stagger: 0.3 }).to(
    ".loader h1",
    {
      y: function (i) {
        return i + 1000;
      },
      opacity: 1,
      stagger: 0.3,
    },
    0.3
  );
}

init();
