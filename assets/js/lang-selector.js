
(function ($) { //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function () {
        "use strict"


        $(".languages").click(function () {
            $(".languages ul").show();
        })
        $(".languages ul").mouseleave(function () {
            $(".languages ul").hide();
        });

        $(".languages li a").click(function () {
            $(".languages li a").removeClass('sel');
            $(this).addClass('sel');
            var selectedValue = $(this).text();
            var showLang = selectedValue;
            lang = selectedValue;
            $('.languages .current').html(showLang);
            $('.languages .current').attr("title", selectedValue);
            $('.languages .hover').html(selectedValue);
            if (lang == "English") {
                window.location = "coming-soon-eng.html";
            } else if(lang == "Chinese") {
                window.location = 'https://flukevietnamtour-com.translate.goog/?_x_tr_sl=vi&_x_tr_tl=zh-CN&_x_tr_hl=en&_x_tr_pto=wapp';
            } else if(lang == "Japanese") {
                window.location = 'https://flukevietnamtour-com.translate.goog/?_x_tr_sl=vi&_x_tr_tl=ja&_x_tr_hl=en&_x_tr_pto=wapp';
            }
            else if(lang == "Korean") {
                window.location = 'https://flukevietnamtour-com.translate.goog/?_x_tr_sl=vi&_x_tr_tl=ko&_x_tr_hl=en&_x_tr_pto=wapp';
            }
             else  {
            window.location = "coming-soon.html";
            }

        })


    });
})(jQuery);