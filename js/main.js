gsap.timeline()
  .fromTo(".hero__catch",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
  )
  .fromTo(".hero__logo",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
    "-=0.5"
  );


  