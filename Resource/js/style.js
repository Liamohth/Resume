/*nav*/
$(document).ready(function(){

$('.js--liamoh').waypoint(function(direction){
  if(direction === 'down'){
    $('nav').addClass('sticky-nav')
  }else{
$('nav').removeClass('sticky-nav')
  }
}, {
  offset: '25%'
});

/*button scroll*/
$('.js-contact-btn').click(function(){
  $('html,body').animate({scrollTop: $('.js--contact-section').offset().top},100);
});

/*animation*/
$('.js--wp-1').waypoint(function(direction){
  $('.js--wp-1').addClass('animate__heartBeat');
}, {
  offset: '60%'
});

$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animate fadeInUp');
},{
  offset:'60%'
});

$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animate__pulse');
},{
  offset: '60%'
});

/*mobile nav*/
$('.js--mobile-main-nav').click(function(){
  var mobileNav = $('.js--main-nav');
  var icons = $('.js--mobile-main-nav i');
  mobileNav.slideToggle(200);

  if(icons.hasClass('fa-align-justify')){
    icons.addClass('fa-times')
    icons.removeClass('fa-align-justify');
  }else{
    icons.addClass('fa-align-justify');
    icons.removeClass('fa-times');
  }
});


});

/*Nav smooth scroll*/
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 100, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });