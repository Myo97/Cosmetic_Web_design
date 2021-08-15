$(window).on("load",function(){
  $(".loading").fadeOut(500,function(){
    this.remove();
    $('html, body').animate({scrollTop: '0px'}, 0)
  });
});

$('.carousel').carousel({
    interval: 3000
  });

  $('.counter').counterUp({
    delay: 1,
    time: 300
});

  $('.s5-slider').slick({
    dots: true,
    infinite: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows:false,
          autoplay: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".navbar-toggler").on("click",function(){
    let result = $(".navbar-collapse").hasClass("show");
       console.log(result);
       if(result == false){
        $(".menu-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up")
       }else{
        $(".menu-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down")
       }
  });

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();