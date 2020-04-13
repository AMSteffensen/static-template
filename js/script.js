window.onload = function() {
  console.log("document loaded");
  var all = document.querySelector(".wrapper");
  all.addEventListener(
    "click",
    function(e) {
      e.preventDefault;
      console.log("hello");
      // -> removing the class
      var all = document.querySelector(".partecipazione");
      all.classList.remove("run-animation");
      void all.offsetWidth;
      // -> and re-adding the class
      all.classList.add("run-animation");
    },
    false
  );

  setTimeout(function() {
    all.src = "https://edmullen.net/test/rc.jpg";
  }, 5000);
};
