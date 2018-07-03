

$(function(){
	// $('body').addClass('left_piller right_piller');
	$("#headerComp").load("pages/header.html"); 
  	$("#footerComp").load("pages/footer.html");

    var path = window.location.pathname;
    var pageName = path.split("/").pop();
    // alert(pageName);


    if(pageName=='index.html'){
         // alert('1');
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
    }
  	
    if(pageName=='contactus.html'){
         // alert('2');
        // Map code goes here
        google.maps.event.addDomListener(window, 'load', init);
        // Map code end here
    }

    if(pageName=='dengi.html'){
         // alert('3');
         $('.dengi_table_row').hide();
         $('.dengi_table_row.active').show();

         $('.dengi_page').click(function(){
            var page_Num=this.id.split('_')[2];
            
            $('.dengi_table_row').hide().removeClass('active');
            $('#row_'+page_Num).show().addClass('active');
            $('.dengi_page').removeClass('active');
            $('#dengi_page_'+page_Num).addClass('active');


         });
    }

 });

// $(document).ready(function(){
// 	//Gallery Page Code Start here
//     $('#imageGallery').lightGallery({
//         showThumbByDefault:true,
//         addClass:'showThumbByDefault'
//     });

//      // $("#videoGallery").lightGallery();
// });


// Map code goes here
function init() {
   // Basic options for a simple Google Map
   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
   var mapOptions = {
     // How zoomed in you want the map to start at (always required)
     zoom: 11,

     // The latitude and longitude to center the map (always required)
     center: new google.maps.LatLng(40.6700, -73.9400), // New York

     // How you would like to style the map. 
     // This is where you would paste any style found on Snazzy Maps.
     styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ecddbb"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d9d8b2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e1d0ad"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9f8e7a"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7d7971"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f3e0c1"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d5c2a3"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5d2c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#838383"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }]
   };

   // Get the HTML DOM element that will contain your map 
   // We are using a div with id="map" seen below in the <body>
   var mapElement = document.getElementById('map');

   // Create the Google Map using our element and options defined above
   var map = new google.maps.Map(mapElement, mapOptions);

   // Let's also add a marker while we're at it
   var marker = new google.maps.Marker({
     position: new google.maps.LatLng(40.6700, -73.9400),
     map: map,
     title: 'Snazzy!'
   });
 }

 // Map code goes here