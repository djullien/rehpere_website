$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smooth-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.attributes.hash) {
      var hash = this.attributes.hash.textContent;
    }
    else if (this.hash !== "") {
      var hash = this.hash;
    }
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
     
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});