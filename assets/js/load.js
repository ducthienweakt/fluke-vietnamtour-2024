(function($){ //create closure so we can safely use $ as alias for jQuery

  $(document).ready(function () {
    "use strict"
    
    
    /* ---------------------------------------------- /*
     * Disable animation for small screens
    /* ---------------------------------------------- */
    var isMobile = window.matchMedia("only screen and (max-device-width: 768px)");
    if (isMobile.matches) {
        $('.inview').addClass('not-animated');
    }
     
     
    /* ---------------------------------------------- /*
     * Add backgrounds
    /* ---------------------------------------------- */
    $('.fullheight').height($(window).height());
    $(window).resize(function(){
        $('.fullheight').height($(window).height());
    });
    
    $.backstretch("assets/images/header.jpg");
     
     
    
    
    /* ---------------------------------------------- /*
     * Scroll TO
    /* ---------------------------------------------- */
    $('.scrollto').click(function(e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        
        $('html, body').stop().animate( {
              'scrollTop': $target.offset().top-40
          }, 600);
      })
      
      
   
     
     
    /* ---------------------------------------------- /*
     * Animation effects
    /* ---------------------------------------------- */
      if (!isMobile.matches) {
        var wow = new WOW(
        {
            boxClass:     'inview',   // default
            animateClass: 'animated', // default
            offset:       100,        // distance to the element when triggering the animation (default is 0)
            mobile:       false
          }
        )
        wow.init();
      }
      
  
    
    
    /* ---------------------------------------------- /*
     * Scroll to top 
    /* ---------------------------------------------- */
       $.fn.scrollToTop=function(){
          var scrollDiv=$(this);
          scrollDiv.hide().removeAttr("href");
          
          if($(window).scrollTop()!="0"){
            $(this).fadeIn("slow")
          }
          
          $(window).scroll(function(){
            if($(window).scrollTop()=="0"){
              $(scrollDiv).fadeOut("slow")
            }else{
              $(scrollDiv).fadeIn("slow")
            }
          });
          
          $(this).click(function(){
            $("html, body").animate({scrollTop:0},"slow");
          });
       }
       $("#toTop").scrollToTop();
    });
  })(jQuery);