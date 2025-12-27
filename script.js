// GSAP functions 
function imgHoverEffect() {
    const imgCon = document.querySelector(".mainImg");
    const playBtn = document.querySelector(".play");

    imgCon.addEventListener("mouseenter", () => {
        gsap.to(playBtn, {
            scale: 1,
            opacity: 1,
        });
    });
    imgCon.addEventListener("mouseleave", () => {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0,
        });
    });
    imgCon.addEventListener("mousemove", (dets) => {
        gsap.to(playBtn, {
            left: dets.x,
            top: dets.y
            
        });
    })
}
gsap.from(".page1 h1", {
    y: 30,
    opacity: 0,
    duration: 1.5,
    delay:0.5,
    ease: "power4.out"
})

// Calling the animated functions
imgHoverEffect();

