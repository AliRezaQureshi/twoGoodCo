function locomotiveAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotiveAnimations();

function navAnimation(){
    // ✅ GSAP animation AFTER locomotive setup
gsap.to(".nav-part1 svg", {
  yPercent: -100,
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    // markers: true,
    start: "top top",
    end: "top -5%",
    scrub: true
  }
});

gsap.to(".nav-part2 .links", {
  yPercent: -100,
  opacity:0,
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    // markers: true,
    start: "top top",
    end: "top -5%",
    scrub: 1
  }
});
}




// GSAP functions 
// function imgHoverEffect() {
//     const imgCon = document.querySelector(".mainImg");
//     const playBtn = document.querySelector(".play");

//      gsap.from(".img-container", {
//         scale: 1.1,
//         opacity:0,
//         duration:0.8,
//         delay: 1.3,
//         ease:"power4.out",
//     })

//     imgCon.addEventListener("mouseenter", () => {
//         gsap.to(playBtn, {
//             scale: 1,
//             opacity: 1,
//         });
//     });
//     imgCon.addEventListener("mouseleave", () => {
//         gsap.to(playBtn, {
//             scale: 0,
//             opacity: 0,
//         });
//     });
//     imgCon.addEventListener("mousemove", (dets) => {
//         gsap.to(playBtn, {
//             left: dets.x-80,
//             top: dets.y-80,
//         });
//     })
// }
function loadingTitleAnim() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay:0.8,
        ease: "power4.out",
        stagger:0.2
    });
    

}
function imgContainerLoadingAni() {
    gsap.from(".img-container", {
        scale: 1.1,
        opacity:0,
        duration:0.8,
        delay: 1.3,
        ease:"power4.out",
    })
}
function cursorAniProducts() {

document.addEventListener("mousemove", (dets)=>{
    gsap.to(".cursor", {
        left:dets.x,
        top:dets.y,

    })
})
let a = document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseenter", function() {
        gsap.to(".cursor", {
            scale:2,
        })
    })
})

a.forEach(function(elem){
    elem.addEventListener("mouseleave", function() {
        gsap.to(".cursor", {
            scale:0,
        })
    })
})
}

// Calling the animated functions
navAnimation();
// imgHoverEffect();
loadingTitleAnim();
cursorAniProducts();
imgContainerLoadingAni();

