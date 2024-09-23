$('.slider_section').slick({
    dots: true,       // Show dots (pagination)
    infinite: true,   // Infinite loop
    speed: 500,       // Transition speed in milliseconds
    slidesToShow: 3,  // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,   // Enable auto-play
    autoplaySpeed: 3000, // Auto-play speed
  });
$('.property_gallery').slick({
    // dots: true,       // Show dots (pagination)
    infinite: true,   // Infinite loop
    speed: 500,       // Transition speed in milliseconds
    slidesToShow: 1,  // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,   // Enable auto-play
    autoplaySpeed: 3000, // Auto-play speed
    prevArrow:".property_item_wrapper .prev",
    nextArrow:".property_item_wrapper .next",
  });
$('.testimonial_slider_wrapper').slick({
    // dots: true,       // Show dots (pagination)
    infinite: true,   // Infinite loop
    speed: 500,       // Transition speed in milliseconds
    slidesToShow: 1,  // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,   // Enable auto-play
    autoplaySpeed: 3000, // Auto-play speed
    prevArrow:".testimony_slider .prev",
    nextArrow:".testimony_slider .next",
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});