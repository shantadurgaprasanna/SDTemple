

$(function(){
	$("#headerComp").load("pages/header.html"); 
  	$("#footerComp").load("pages/footer.html");


  	// Mix gallery Slick carousal
  	$('.slider-thumbs .slick-slide').removeClass('slick-current');
	  $('.slider-nav').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: false,
	    nextArrow: '<img class="next" src="https://image.flaticon.com/icons/svg/137/137513.svg">',
	    prevArrow: '<img class="pre" src="https://image.flaticon.com/icons/svg/137/137514.svg">',

	    cssEase: 'ease-in-out',
	    autoplay: false,
	    autoplaySpeed: 2200,
	    speed: 800,
	    asNavFor: '.slider-thumbs'
	  });
	  $('.slider-thumbs').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    autoplay: false,
	    arrows: false,
	    asNavFor: '.slider-nav',
	    dots: false,
	    centerMode: false,
	    // centerpadding: '50',
	    // variableWidth: true,
	    focusOnSelect: true,
	    // slidesPerRow: 1
	    responsive: [
	    	{
		      breakpoint: 1920,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	  });
	// Mix gallery Slick carousal code end here

});