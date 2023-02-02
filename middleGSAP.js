(function () {
    gsap.to(parentNode, {duration: 0, opacity: 1})
    let primaryCopy = parentNode.querySelector(".primaryCopy");
    let secondaryCopy = parentNode.querySelector(".secondaryCopy");
    let primaryTl = gsap.timeline();
    let secondaryTl = gsap.timeline();
    primaryTl.from(primaryCopy, {duration: 1.5, x: "300px", opacity: 0});
    primaryTl.to(primaryCopy, {duration: 1, x: "-200px"}, "+=3");
    secondaryTl.from(secondaryCopy, {duration: 1.5, x: "300px", opacity: 0});
    secondaryTl.to(secondaryCopy, {duration: 1, x: "-200px"}, "+=3");
    gsap.to(parentNode, {duration: 0, opacity: 0, delay: 6})
    console.log("End of Animation");
})();