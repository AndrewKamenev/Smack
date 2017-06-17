$(document).ready(function(){
		
	//sliders
	$("#slider-adver").owlCarousel({
    	items: 6,
    	margin: 50,
    	nav: true,
    	dots: false,
    	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    	// dots: true,
        loop: true,
        responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        480:{
	            items:3,
	        },
	        768:{
	            items:4,
	        },
	        1000:{
	            items:6,
	        }
	    }
    });
      $("#slider-quote").owlCarousel({
    	items: 1,
    	margin: 0,
    	nav: false,
    	dots: true,
        loop: true,
    });


});

$(document).ready(function(){
    $('.counter').viewportChecker({
      callbackFunction: function(elem, action){
        $(".html-css").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"
		}).radialProgress("to", {'perc': '90 ', 'time': 1000}),

        $(".ai-ps").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"
		}).radialProgress("to", {'perc': '96 ', 'time': 1500}),

		$(".js-php").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"
		}).radialProgress("to", {'perc': '85 ', 'time': 800}),

		$(".photo").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"
		}).radialProgress("to", {'perc': '94 ', 'time': 1400})	
    }});
});

$(document).ready(function(){
    $('#counter-block1').viewportChecker({
      callbackFunction: function(elem, action){
          $('#countdown1600').animateNumber({ number: 1600})
    }});
    $('#counter-block2').viewportChecker({
      callbackFunction: function(elem, action){
          $('#countdown3200').animateNumber({ number: 3200})
    }});
    $('#counter-block3').viewportChecker({
      callbackFunction: function(elem, action){
          $('#countdown40').animateNumber({ number: 40})
    }});
    $('#counter-block4').viewportChecker({
      callbackFunction: function(elem, action){
          $('#countdown20000').animateNumber({ number: 20000})
    }});
});
//tabs-gallery
$(document).ready(function(){
	 $( ".tabs-gallery" ).tabs({ show: { effect: "drop", duration: 1000 } }); 
	});

// tabs-team
$(document).ready(function(){
	$(".close-button").click(function(){
	$(".tab-list ul li").removeClass("ui-tabs-active ui-state-active");
	$(".ui-tabs-panel").fadeOut(1);

	 return false;
		});
	});
$(document).ready(function(){
	 $( ".tabs" ).tabs({ show: { effect: "explode", duration: 500 } }); 
	});

//mobile buttons
  $( ".mobile-close" ).hide();
		$( ".mobile" ).click(function() {
			$( ".collapse" ).slideToggle( "slow", function() {
			$( ".mobile" ).hide();
			$( ".mobile-close" ).show();
		});
});

$( ".mobile-close" ).click(function() {
	$( ".collapse" ).slideToggle( "slow", function() {
		$( ".mobile-close" ).hide();
		$( ".mobile" ).show();
	});
});


// for input hover effect
$("input, textarea").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		});


// script for smooth scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });