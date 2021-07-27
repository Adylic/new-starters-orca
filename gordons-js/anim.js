(function () {
  triggerAnimationsOnFrameStart();
  processExitAnimationOverrides();

  function triggerAnimationsOnFrameStart() {
    parentNode.classList.add('animate');
  }

  function processExitAnimationOverrides() {
    let mainCopy = parentNode.querySelector('.main-copy');
    console.log(mainCopy);
    if (mainCopy.classList.contains('hold-in-place')) {
      setTimeout(() => {
        mainCopy.classList.add('opacity-1');
        parentNode.classList.remove('animate');
      }, 500);
    }
  }
})();
