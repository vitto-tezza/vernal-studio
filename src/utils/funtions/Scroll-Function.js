const scrollFunction = window.addEventListener("scroll", function() {
  var animate = document.querySelectorAll(".animate");

  for (let i = 0; i < animate.length; i++) {
    let altura = window.innerHeight / 1.7;

    let distancia = animate[i].getBoundingClientRect().top;

    if (distancia <= altura) {
      animate[i].classList.remove(
        "Projects-ScrollAnimation",
        "Projects-ScrollAnimation-Arrow",
        "CreativeProcess-Scroll"
      );
    }
  }
});

export default scrollFunction;
