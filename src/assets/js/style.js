const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// *****************GSAP******************

gsap.registerPlugin(ScrollTrigger);

// Left side box animation
gsap.from(".tc-women", {
  y: 200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".tc-women",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

// Right side box animation
gsap.from(".tc-men", {
  x: 300, // Right se enter
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".tc-men",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from("aside", {
  x: -300, // Right se enter
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "aside",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".arrival-item", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".arrival-item-container",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".gsp", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".left-content",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});
gsap.from(".gsp-t", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".hero-text",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});


gsap.from(".bg-box", {
  x: 300, // Right se enter
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".right-images",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});
gsap.from(".small-image", {
  y: 300, // Right se enter
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".bg-box",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".sec-gsp", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".sec-offer-container",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".brandimage", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".brands",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".review_slide", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".review-content",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".blog_slide", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".blog-content",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});


gsap.from(".collected-item", {
  x: -300,
  opacity: 0,
  duration: .4,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".collection",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".feature-box", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // ek ke baad ek
  scrollTrigger: {
    trigger: ".features",
    start: "top 70%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.utils.toArray(".gsp-text").forEach((feature) => {
  gsap.from(feature, {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: feature,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    }
  });
});
ScrollTrigger.refresh();