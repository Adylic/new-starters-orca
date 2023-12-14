(function () {
  checkForGsap(initFrameAnimations);

  function checkForGsap(callback) {
    let DEADLINE_MS = 10000;
    let RETRY_MS = 100;
    let interval;

    let timeout = setTimeout(() => {
      clearInterval(interval);
      devLog("GSAP failed to load after " + DEADLINE_MS / 1000 + " second(s).");
    }, DEADLINE_MS);

    try {
      if (gsap) {
        clearTimeout(timeout);
        callback();
      }
    } catch {
      devLog("Initial GSAP load failed. Trying again.");
      interval = setInterval(() => {
        try {
          if (gsap) {
            clearTimeout(timeout);
            clearInterval(interval);
            callback();
          }
        } catch {}
      }, RETRY_MS);
    }
  }

  function devLog(message) {
    if (isDevEnv()) console.log(message);
  }

  function isDevEnv() {
    return (
      window.location.href.indexOf("orca.adylic.com") > 0 ||
      window.location.href.indexOf("template.adylicorca.com") > 0
    );
  }

  function initFrameAnimations() {
    let frameTl = gsap.timeline({ defaults: { duration: 1, ease: "power1.in"}});
    // Your frame animations go here
    frameTl.to(".heading_primary", { opacity: 1 })
    frameTl.to(".heading_sub", { opacity: 1 }, "-=0.5");
  }
})();
