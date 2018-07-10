$(document).ready(function() {
        $.getJSON('../data_image.json', function(data) {
            for(i=0;i<9;i++){
                  $(".images_gallery ul").append("<li class='col-md-4' data-src='" + data.images[i].src + "'><img src='" + data.images[i].src + "' alt ='" + data.images[i].alt + "' / ></li>");
            }
            lightData();

            $('.images_nav span').click(function(){
                $(".images_gallery ul").empty();
                $('.images_nav span').removeClass('active');
                var click_id=this.id;
                $('#'+click_id).addClass('active');
                imageData(click_id);
                
                // setTimeout(function(){
                //     lightData();
                //     alert('hi');
                // }, 500);
                    // }
                    // $.each(b, function (i, f) {
                    // $(".images_gallery ul").append("<li class='col-md-4' data-src='" + f.src + "'><img src='" + f.src + "' alt ='" + f.alt + "' / ></li>");
                    // });


                });
                 // lightData();
            });


            // $.getJSON('../data_image.json', function(data) {
            //     $.each(data.images, function (i, f) {
            //         $(".images_gallery ul").append("<li class='col-md-4' data-src='" + f.src + "'><img src='" + f.src + "' alt ='" + f.alt + "' / ></li>");
            //     });
            // });

            setTimeout(function(){
                alert('hi');
                $('#lightGallery').lightGallery({
                    showThumbByDefault:true,
                    addClass:'showThumbByDefault'
                }); 
            }, 500);
            // lightData();

          });
         lightData();












         
function imageData(clickID){
    $.getJSON('../data_image.json', function(data) {
 // get json data
                var a=clickID.split('_')[1];
                console.log('a='+ a);
               
                // $.getJSON('../data_image.json', function(data) {
                     // var b='data.images_' + a;
                //      var c=b.length;
                // console.log(c);
                    var b = a * 9 - 9;
                    console.log('b='+ b);
                        if(b<=data.images.length){
                            do{
                                $(".images_gallery ul").append("<li class='col-md-4' data-src='" + data.images[b].src + "'><img src='" + data.images[b].src + "' alt ='" + data.images[b].alt + "' / ></li>");

                                b++;
                            }while(b%9 != 0);
                           
                        }   

                    });
}

function lightData(){
    alert('hi');
        $('#lightGallery').lightGallery({
                    showThumbByDefault:true,
                    addClass:'showThumbByDefault'
                });    
    
}