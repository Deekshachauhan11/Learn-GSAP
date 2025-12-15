function page1Animation(){
   let tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
  y: -40,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  stagger: 0.14,
});

tl.from(".center-part1 h1", {
  x: -300,
  opacity: 0,
  duration: 0.5,
}, "-=0.3");

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
    x:200,
}, "-=0.7");


tl.from(".section1bottom img", {
    opacity: 0,
    y:30,
    stagger:0.15,
    duration: 0.5,
}, "-=0.3");
}


function page2Animation(){
    
let tl = gsap.timeline({
    scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top -75%",
    scrub:2,
   }
});


tl.from(".services", {
   y:30,
   opacity:0,
   duration:0.5,
})
tl.from(".elem.line1.left", {
   x:-300,
   opacity:0,
   duration:1,
}, "anim1")
tl.from(".elem.line1.right", {
   x:300,
   opacity:0,
   duration:1,
},"anim1")


tl.from(".elem.line2.left", {
   x:-300,
   opacity:0,
   duration:1,
}, "anim2")
tl.from(".elem.line2.right", {
   x:300,
   opacity:0,
   duration:1,
},"anim2")

tl.from(".elem.line3.left", {
   x:-300,
   opacity:0,
   duration:1,
}, "anim3")
tl.from(".elem.line3.right", {
   x:300,
   opacity:0,
   duration:1,
},"anim3")


tl.from(".elem.line4.left", {
   x:-300,
   opacity:0,
   duration:1,
}, "anim4")
tl.from(".elem.line4.right", {
   x:300,
   opacity:0,
   duration:1,
},"anim4")
}


page1Animation();
page2Animation();