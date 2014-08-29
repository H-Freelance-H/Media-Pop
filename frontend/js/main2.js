$(document).ready(function(){

    /* start intro animation */
    intro_in();

    /* section are fit to screen after page load */
    var winsize_h = $(window).height();
    $(".section-container").css("min-height", winsize_h);

    /* section are fit to screen after window resized */
    $(window).bind("resizeEnd", function() {
        var winsize_h = $(window).height();
        $(".section-container").css("min-height", winsize_h);
    });
    $(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 300);
    });

    /* ------------------------------------------------ */

    /* show register form */
    $(".register-trigger").click(function(event){
        /*event.preventDefault();*/
        signup_in();
    });

    /* ------------------------------------------------ */

    /* animate content when section is visible
    $(window).scroll(function() {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            var scrolltop  = $(this).scrollTop();
            if($("#howitworks").offset().top / 2 - 150 < scrolltop){
                howitworks_in();
            }else{
                howitworks_out();
            }
        }, 100));
    });
    */

    $(window).scroll(function(){
        var winHeight = $(this).height();
        var winHHalf = winHeight / 2;
        var scrollTop = $(this).scrollTop();
        if(winHHalf < scrollTop){
            $("#frontpage-header").show()
        }else{
            $("#frontpage-header").hide()
        }
    });
    $(window).scroll(function(){
        var winHeight = $(window).height() / 2;
        var scrolltop  = $(this).scrollTop();
        if($("#howitworks").offset().top - winHeight - 200< scrolltop){
            howitworks_in();
        }else{
            howitworks_out();
        }
    });
    $(window).scroll(function(){
        var winHeight = $(window).height() / 2;
        var scrolltop  = $(this).scrollTop();
        var wex = $("#location").offset();
        if(wex.top - winHeight - 200< scrolltop){
            location_in();
        }else{
            location_out();
        }
    });

    /* ------------------------------------------------ */

    $(".modal-trigger").click(function(event){
        event.preventDefault();
        var modalID = $(this).attr("data-modal");
        var endAnimation = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd mozAnimationEnd";

        $(".modal-deppobackdrop").fadeIn();
        $("#" + modalID).addClass("show animated bounceInDown").bind(endAnimation, function(){
            $(this).unbind(endAnimation).removeClass("bounceInDown");
        });
    });
    $(".modal-close").click(function(event){
        event.preventDefault();
        var endAnimation = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd mozAnimationEnd";

        $(".modal-deppobackdrop").fadeOut();
        $(".modal-deppo").addClass("bounceOutUp").bind(endAnimation, function(){
            $(this).unbind(endAnimation).removeClass("show animated bounceOutUp");
        });
    });
});

/* variables */
var endAnimation = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd mozAnimationEnd";

/* functions */
function howitworks_in(){
    $("#howitworks h2").removeClass("hide").addClass("animated fadeInLeftBig");
    setTimeout(function(){
        $("#howitworks h3").removeClass("hide").addClass("animated fadeInRightBig");
        setTimeout(function(){
            $("#howitworks .boxWrapper1").removeClass("hide").addClass("animated fadeInLeftBig");
            $("#howitworks .boxWrapper2").removeClass("hide").addClass("animated fadeInUpBig");
            $("#howitworks .boxWrapper3").removeClass("hide").addClass("animated fadeInRightBig");
        }, 100);
    }, 100);
}
function howitworks_out(){
    $("#howitworks h2").addClass("hide").removeClass("animated fadeInLeftBig");
    $("#howitworks h3").addClass("hide").removeClass("animated fadeInRightBig");
    $("#howitworks .boxWrapper1").addClass("hide").removeClass("animated fadeInLeftBig");
    $("#howitworks .boxWrapper2").addClass("hide").removeClass("animated fadeInUpBig");
    $("#howitworks .boxWrapper3").addClass("hide").removeClass("animated fadeInRightBig");
}

function location_in(){
    $("#location h2").removeClass("hide").addClass("animated fadeInLeftBig");
    setTimeout(function(){
        $("#location h3").removeClass("hide").addClass("animated fadeInRightBig");
        setTimeout(function(){
            $("#location .maps").removeClass("hide").addClass("animated fadeInRightBig");
            $("#location .locationlist").removeClass("hide").addClass("animated fadeInLeftBig");
        }, 100);
    }, 100);
}
function location_out(){
    $("#location h2").addClass("hide").removeClass("animated fadeInLeftBig");
    $("#location h3").addClass("hide").removeClass("animated fadeInRightBig");
    $("#location .maps").addClass("hide").removeClass("animated fadeInRightBig");
    $("#location .locationlist").addClass("hide").removeClass("animated fadeInLeftBig");
}

function intro_in(){
    $(".intro-content .logo").removeClass("hide").addClass("animated fadeInLeftBig");
    setTimeout(function(){
        $(".intro-content h1").removeClass("hide").addClass("animated fadeInLeftBig");
        $(".intro-content .btn-wrapper").removeClass("hide");
        setTimeout(function(){
            $(".intro-content .btn-default").removeClass("hide").addClass("animated fadeInLeftBig");
            setTimeout(function(){
                $(".intro-content .btn-primary").removeClass("hide").addClass("animated fadeInLeftBig").bind(endAnimation, function(){
                    $(".intro-content .animated").unbind(endAnimation).removeClass("animated fadeInLeftBig");
                });
            }, 150);
        }, 250);
    }, 250);
}
function signup_in(){
    $(".registrationForm").removeClass("hide");
    $(".registrationForm h2").removeClass("hide").addClass("animated fadeInUpBig");
    setTimeout(function(){
        $(".registrationForm h5").removeClass("hide").addClass("animated fadeInUpBig");
        setTimeout(function(){
            $(".registrationForm .fname").removeClass("hide").addClass("animated fadeInUpBig");
            setTimeout(function(){
                $(".registrationForm .lname").removeClass("hide").addClass("animated fadeInUpBig");
                setTimeout(function(){
                    $(".registrationForm .emailaddress").removeClass("hide").addClass("animated fadeInUpBig");
                    setTimeout(function(){
                        $(".registrationForm .contactnum").removeClass("hide").addClass("animated fadeInUpBig");
                        setTimeout(function(){
                            $(".registrationForm .password").removeClass("hide").addClass("animated fadeInUpBig");
                            setTimeout(function(){
                                $(".registrationForm .confirmpass").removeClass("hide").addClass("animated fadeInUpBig");
                                setTimeout(function(){
                                    $(".registrationForm .terms-of-use").removeClass("hide").addClass("animated fadeInUpBig");
                                    setTimeout(function(){
                                        $(".registrationForm .btn").removeClass("hide").addClass("animated fadeInUpBig").bind(endAnimation, function(){
                                            $(".registrationForm .animated").unbind(endAnimation).removeClass("animated fadeInUpBig");
                                        });
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}
function auto_show_signup(){
    $(".registrationForm").removeClass("hide");
    $(".registrationForm h2").removeClass("hide");
    $("#front_registration_form *").removeClass("hide");
}

function signup_out(){
    $(".registrationForm").removeClass("hide");
    $(".registrationForm h2").addClass("animated fadeOutUpBig");
    setTimeout(function(){
        $(".registrationForm h5").addClass("animated fadeOutUpBig");
        setTimeout(function(){
            $(".registrationForm .fname").addClass("animated fadeOutUpBig");
            setTimeout(function(){
                $(".registrationForm .lname").addClass("animated fadeOutUpBig");
                setTimeout(function(){
                    $(".registrationForm .emailaddress").addClass("animated fadeOutUpBig");
                    setTimeout(function(){
                        $(".registrationForm .contactnum").addClass("animated fadeOutUpBig");
                        setTimeout(function(){
                            $(".registrationForm .password").addClass("animated fadeOutUpBig");
                            setTimeout(function(){
                                $(".registrationForm .confirmpass").addClass("animated fadeOutUpBig");
                                setTimeout(function(){
                                    $(".registrationForm .terms-of-use").addClass("animated fadeOutUpBig");
                                    setTimeout(function(){
                                        $(".registrationForm .btn").addClass("animated fadeOutUpBig").bind(endAnimation, function(){
                                            $(".registrationForm .animated").unbind(endAnimation).addClass("hide").removeClass("animated fadeOutUpBig");
                                            $(".registrationForm").addClass("hide");
                                        });
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}