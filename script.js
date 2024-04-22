var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0 solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor: "black",
    height: "105px",
    duration:0.7,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -70%",
        scrub: 2,
    }
})
gsap.from("#about-us img, #about-us-in",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.8, // Aik aik kry cheezeyn
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    }
})
gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1,
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    duration: 3,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: "1",
    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    duration: 1,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: "1",
    }
})
gsap.from("#page4",{
    // scale: 0.8,
    // opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1,
    }
})

gsap.from(".elem",{
    // scale: 0.8,
    // opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".elem",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1,
    }
})