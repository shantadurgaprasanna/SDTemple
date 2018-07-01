

$(function(){
	// $('body').addClass('left_piller right_piller');
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
	    slidesToShow: 5,
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
		        slidesToShow: 5,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 5,
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

	// Event and Guest Slick carousal
	$('.guestCarousal, .eventCarousal').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
    // Event and Guest Slick carousal Code End Here
 });

// $(document).ready(function(){
// 	//Gallery Page Code Start here
//     $('#imageGallery').lightGallery({
//         showThumbByDefault:true,
//         addClass:'showThumbByDefault'
//     });

//      // $("#videoGallery").lightGallery();
// });