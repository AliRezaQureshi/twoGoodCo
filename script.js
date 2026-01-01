const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



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
 gsap.from(".img-container", {
        scale: 1.1,
        opacity:0,
        duration:0.8,
        delay: 1.3,
        ease:"power4.out",
    })


// Calling the animated functions

// imgHoverEffect();
loadingTitleAnim();

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
