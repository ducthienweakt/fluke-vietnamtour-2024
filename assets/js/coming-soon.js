(function($){ //create closure so we can safely use $ as alias for jQuery

    /* ---------------------------------------------- /*
    * Preloader and welcome animation
    /* ---------------------------------------------- */
    $(window).load(function() {
        $('#status').fadeOut(2000,()=>{});
        $('#preloader').delay(2350).fadeOut("slow");
        
        /* center Title on screen */
        $(".intro-title")
          .css("left", Math.max(0, (($('#welcome').outerWidth() - $(".intro-title").outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        
        setTimeout(function() {
          $(".intro-title").removeClass("opacity-0").addClass("fadeInUp");
        }, 3000);
        
        setTimeout(function() {
          $(".intro-title").removeClass("fadeInUp").addClass("fadeOut");
        }, 6000); // time to show intro tet
        
        setTimeout(function() {
          $(".intro-title").hide();
          $("#welcome-logo").addClass("fadeInUp").removeClass("opacity-0");
        }, 7000);
        
        setTimeout(function() {
          $("#welcome-text").addClass("fadeInUp").removeClass("opacity-0");
        }, 8000);

        setTimeout(function() {
          $("#welcome-title").addClass("fadeIn").removeClass("opacity-0");
        }, 8500);
        setTimeout(function() {
          $("#welcome-sponsor").addClass("fadeInUp").removeClass("opacity-0");
        }, 9500);
        setTimeout(function() {
          $('html, body').stop().animate( {
            'scrollTop': $('#countdown-section').offset().top-40
          }, 600);
        }, 13000);
    });
    
    
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
     * Countdown
    /* ---------------------------------------------- */
    $("#getting-started").countdown("2024/05/06", function(event) { // Your custom date here in the following format - yyyy/mm/dd
        $(this).html( event.strftime(''
            + '<div class="text-white"><span >%D</span> Days</div>'
            + '<div class="text-white"><span >%H</span> Hours</div>'
            + '<div class="text-white"><span>%M</span> Minutes</div>'
            + '<div class="text-white"><span>%S</span> Seconds</div>'
        ));
    });
    
    
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
    
  
    
    // submit form
    var isSubmitting = false;
  $('#subForm').submit(function(e) {
    e.preventDefault(); // prevent from submitting form directly
    if(!isSubmitting){
      isSubmitting = true;
      $(":submit").attr("disabled", true);
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzxvc_a_8N8j7QunsoXduJncApg4dFABZmCxPEdWHf54qRfgELowuSRLM-44L5pVpbYnA/exec',
        method: 'POST',
        data: $("#subForm").serializeArray() // convert all form data to array (key:value)
      })
      .done(function(response){
        
        if(lang == "English"){
          window.location = "thank-you.html";
        }else{
          window.location = "cam-on.html";
        }
       
        isSubmitting = false;
      })
      .fail(function(error){
        alert("error"); // show the error.
         isSubmitting = false;
      });
    }
   
  
  })
    
    
    
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