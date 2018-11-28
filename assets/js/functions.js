$(function(){
    registPop();
    sliderIndex();
    scrollNav();
    toTop();
    navHide();
    rangeRebate();
});
function registPop(){
    $("#registpopup").click(function(){
        $(".window-popup").slideToggle(300);
    });
    $("#close-popup").click(function(){
        $(".window-popup").fadeOut(300);
    });
}
function sliderIndex(){
    $("#registpopup").click(function() {
        $(".carousel-indicators").css('z-index','0');
    });
    $("#close-popup").click(function() {
        $(".carousel-indicators").css('z-index','15');
    });
}
function scrollNav() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 550) {
        $("#second-navbar").addClass("fixed-top");
        } else {
            $("#second-navbar").removeClass("fixed-top");
        }
        });
} 
function toTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
}

function navHide() {
    $("#nav-hide").hide();
    
    $(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('#nav-hide').fadeIn();
		} else {
			$('#nav-hide').fadeOut();
		}
	});
}

function rangeRebate() {
    var rangeSlider = function(){
      var slider = $('.range-slider'),
          range = $('.range-slider__range'),
          value = $('.range-slider__value');

      slider.each(function(){

        value.each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });

        range.on('input', function(){
          $(this).next(value).html(this.value);
        });
      });
    };

    rangeSlider();
}

