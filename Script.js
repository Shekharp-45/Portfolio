let options = {
    strings: ["Shekhar Patil.", "a Web Developer.", "Software Developer."],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
  };
  
  let typed = new Typed(".typedText", options);
  
  function myMenuFunction() {
    let navMenu = document.getElementById("myNavMenu");
    if (navMenu.className === "nav-menu") {
      navMenu.className += " responsive";
    } else {
      navMenu.className = "nav-menu";
    }
  }
  