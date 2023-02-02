(function () {
  document.querySelector(".middle-frame").style.opacity = 0;
  document.querySelector(".end-frame").style.opacity = 0;

  checkForGsap(initFrameAnimations);

  function checkForGsap(callback) {
    let deadlineMs = 1000;
    let interval;

    let timeout = setTimeout(() => {
      clearInterval(interval);
    }, deadlineMs);

    try {
      if (gsap) callback();
    } catch {
      interval = setInterval(() => {
        try {
          if (gsap) {
            clearTimeout(timeout);
            clearInterval(interval);
            callback();
          }
        } catch (error) {
          console.log(error);
        }
      }, 100);
    }
  }

  function initFrameAnimations() {
      let primaryCopy = parentNode.querySelector(".primaryCopy");
      let secondaryCopy = parentNode.querySelector(".secondaryCopy");
      gsap.to(primaryCopy, {duration: 1, x: "-200px", delay:4.5});
      gsap.to(secondaryCopy, {duration: 1, x: "-200px", delay: 4.5});
      gsap.to(parentNode, {duration: 0, opacity: 0, delay: 6})
      console.log("End of Animation");
  }
})();