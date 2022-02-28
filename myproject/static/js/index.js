console.log('static');
const tl = gsap.timeline()

    function init() {
      tl
      .to("body", {ease:"Circ.easeIn", opacity:1, duration:0.8})
      .to("main", {ease:"Circ.easeOut", opacity:1, duration:0.2})
      
      // .to(".button", {opacity:1}, 0)
      
      
      console.log("intititit")
    };


    window.addEventListener("load", function(event){
      init();
    });
