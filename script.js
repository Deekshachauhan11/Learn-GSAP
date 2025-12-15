let tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
  y: -40,
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.14,
});

tl.from(".center-part1 h1", {
  x: -300,
  opacity: 0,
  duration: 0.5,
});

tl.from(".center-part1 p", {
  x: -100,
  opacity: 0,
  duration: 0.4,
});
tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
tl.from(".center-part2 img", {
    opacity: 0,
    duration: 0.5,
  }, "-=1");