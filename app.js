// Pin the first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});
// HIGHLIGHT PAGE 2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-28%",
    end: "60%",
  },
});
tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.4)" },
  { color: "rgba(255,255,255,1", stagger: 1 }
);
const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-10%",
    end: "85%",
  },
});
tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4", stagger: 1 });
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-40%",
    end: "15%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: -50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
    start: "0%",
    end: "100%",
  },
});

// Carousel

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");

    // check if we're on same swatch;
    if (currentSwatch === swatchName) return;

    let closeUp = document.querySelector("." + swatchName);

    currentSwatch = swatchName;
    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
    // Gallery
    gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(.9)" });
    topIndex++;
  });
});

// Page 5 vid on sroll
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "150%",
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
});
tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);

tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  "<"
);

// 6th page
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-50%",
    end: "30%",
    scrub: true,
  },
});

tlParallax.fromTo(".photo-description", { y: 60 }, { y: -20 });
tlParallax.fromTo(".portrait-container", { y: 60 }, { y: -20 }, "<");
tlParallax.fromTo(".phone-video", { y: 120 }, { y: -60 }, "<");
