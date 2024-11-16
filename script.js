window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loadingScreen").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("loadingScreen").style.display = "none";
    }, 500)
  }, 2000);
});
