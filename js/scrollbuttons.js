$('div.section').first();

$('a.display').on('click', function(e) {
    e.preventDefault();

      var t = $(this).text(),
      that = $(this);

    if (t === 'next' && $('.current2').next('div.section').length > 0) {
        var $next = $('.current2').next('.section');
        var top = $next.offset().top;
        
        $('.current2').removeClass('current2');     
        $(function () {
               $next.addClass('current2');
               $('html, body').animate({scrollTop: $('.current2').offset().top }, 'slow');
            
        });
  } else if (t === 'prev' && $('.current2').prev('div.section').length > 0) {
        var $prev = $('.current2').prev('.section');
        var top = $prev.offset().top;
        
        $('.current2').removeClass('current2');
      
        $(function () {
               $prev.addClass('current2');
               $('html, body').animate({scrollTop: $('.current2').offset().top }, 'slow');
        });
  } 
});


