
  
  
$('.flexslider').flexslider({
    animation: "slide"
 });
 
 $('#owl-demo').owlCarousel({
        autoPlay: true, 
        pagination: false,
        navigation: true,

        itemsCustom : [
            [0, 1],
            [320, 2],
            [450, 3],
            [600, 4],
            [750, 7],
            [1100, 8]
        ],
    });
	
	new WOW().init();
	
	$(window).scroll(function(){
	  var sticky = $('.logo_nav'),
		  scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});	
	
	
$( document ).ready(function() {
   	var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
	 // alert(day + "/" + month + "/" + year);
  $('#date').html(day + "/" + month + "/" + year);
});

$( document ).ready(function() {
	var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	var suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}

	$('#time').html(hours + ":" + minutes + " " + suffix);
	
	//document.write(hours + ":" + minutes + " " + suffix)
	
});

	



  
	
	  	
	
 



