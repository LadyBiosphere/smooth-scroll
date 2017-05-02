// Note: This requires jQuery!

$(document).ready(function(){

  // Add scrolling effect to all anchors
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor behavior
      event.preventDefault();

      // Store the hash
      var hash = this.hash;

      // Use jQuery's animate() method to create smooth scrolling
      // The number (800) specifies the number of milliseconds it will take to scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to the URL when done scrolling
        window.location.hash = hash;
      });
    }
  });
});