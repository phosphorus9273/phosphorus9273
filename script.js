window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loadingScreen").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("loadingScreen").style.display = "none";
    }, 500)
  }, 750);
  const copyButtons = document.querySelectorAll(".scnx-copy-btn");

  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const text = button.dataset.text;
      navigator.clipboard.writeText(text);
    });
  });
});
