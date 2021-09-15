$(document).ready(function(){
    $('.san_pham--xem-them').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
        ],
        prevArrow: "<i class='slick-prev fas fa-chevron-left'></i>",
        nextArrow: "<i class='slick-next fas fa-chevron-right'></i>",
    });

    $(".box_slide--header").click(function(){
        $(this).next().slideToggle("slow");
        $(this).find(".mark_slide-2").toggleClass("an_hien");
    });

});