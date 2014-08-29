$(document).ready(function(){

	/* container height inhiret window height */
	var winsize_h = $(window).height();
    $(".pt-page-inner").css("height", winsize_h - 53);

	/* page load animation */
	setTimeout(function() {
		$('.pt-page-1').addClass("pt-page-current pt-page-flipInTop pt-page-delay500");

		setTimeout(function() {
			if($(".pt-page-1").hasClass("pt-page-current")){
				$(".pt-page-1 h4, .pt-page-1 h1").show().addClass("animated fadeInUp");
				$(".getstarted").show().addClass("animated fadeInDown");
				$(".pt-page-1").removeClass("pt-page-flipInTop pt-page-delay500");
				setTimeout(function(){
					$(".getstarted").removeClass("fadeInDown");
					$(".pt-page-1 h4, .pt-page-1 h1").removeClass("fadeInUp");
				}, 2500);
			}else{
				$(".pt-page-1 h4, .pt-page-1 h1").fadeOut().removeClass("animated fadeInUp");
				$(".getstarted").fadeOut().removeClass("animated fadeInDown");
			}
		}, 1000);
	}, 1000);

	/* -------------------------------------------------------------------- */

	/* page navigation */
	$(".menuItem").click(function(e){
		e.preventDefault();
		var loadPage = $(this).attr("data-page");

		$(".menuItem").removeClass("active");
		$(this).addClass("active");

		$(".pt-page-current").addClass("pt-page-rotatePushBottom");
		currentpage_close();

		$("." + loadPage).addClass("pt-page-loading pt-page-rotatePullTop pt-page-delay180");
		loadingpage_open();

		/* getting started form */
		$(".getstarted_form").fadeOut();
	});
	function currentpage_close() {
		setTimeout(function() {
			$('.pt-page-current').removeClass("pt-page-current pt-page-rotatePushBottom");
			$(".pt-page-inner").scrollTop(0);
		}, 1000);
	}
	function loadingpage_open() {
		setTimeout(function() {
			$(".pt-page-loading").removeClass("pt-page-loading pt-page-rotatePullTop pt-page-delay180").addClass("pt-page-current");

			/* for home page (page-1) custom animateion */
			if($(".pt-page-1").hasClass("pt-page-current")){
				$(".pt-page-1 h4, .pt-page-1 h1").show().addClass("animated fadeInUp");
				$(".getstarted").show().addClass("animated fadeInDown");
				$("#ascrail2000").addClass("activateScroll");
			}else{
				$(".pt-page-1 h4, .pt-page-1 h1").fadeOut().removeClass("fadeInUp");
				$(".getstarted").fadeOut().removeClass("fadeInDown");
				$(".getstarted_form").fadeOut();
				$("#ascrail2000").removeClass("activateScroll");
			}

			/* for how it works (page-2) custom animateion */
			if($(".pt-page-2").hasClass("pt-page-current")){
				$(".pt-page-2 h4, .pt-page-2 h1").show().addClass("animated fadeInUp");
				setTimeout(function(){
					$("#step1").show().addClass("animated flipInX");
					setTimeout(function(){
						$("#step2").show().addClass("animated flipInX");
						setTimeout(function(){
							$("#step3").show().addClass("animated flipInX");
						}, 500);
					}, 500);
				}, 500);
				$("#ascrail2001").addClass("activateScroll");
			}else{
				$(".pt-page-2 h4, .pt-page-2 h1").fadeOut().removeClass("fadeInUp");
				$(".stepwrapper").fadeOut().removeClass("flipInX");
				$("#ascrail2001").removeClass("activateScroll");
			}

			/* for location (page-3) custom animateion */
			if($(".pt-page-3").hasClass("pt-page-current")){
				$(".pt-page-3 h4, .pt-page-3 h1").show().addClass("animated fadeInUp");
				$(".locationlist").show().addClass("animated fadeInDown");
				$(".mapsContainer").show().addClass("animated fadeInDown");
				$("#ascrail2002").addClass("activateScroll");
			}else{
				$(".pt-page-3 h4, .pt-page-3 h1").fadeOut().removeClass("fadeInUp");
				$(".locationlist").fadeOut().removeClass("fadeInDown");
				$(".mapsContainer").fadeOut().removeClass("fadeInDown");
				$("#ascrail2002").removeClass("activateScroll");
			}

			/* for faq (page-4) custom animateion */
			if($(".pt-page-4").hasClass("pt-page-current")){
				$(".pt-page-4 h4, .pt-page-4 h1").show().addClass("animated fadeInUp");
				$(".faqContent").show().addClass("animated fadeInDown");
				setTimeout(function(){
					$(".faq-group1").show().addClass("animated fadeInLeft");
					setTimeout(function(){
						$(".faq-group2").show().addClass("animated fadeInLeft");
						setTimeout(function(){
							$(".faq-group3").show().addClass("animated fadeInLeft");
							setTimeout(function(){
								$(".faq-group3").addClass("collapse-down");
								$("#shippingexceptions").slideDown(500);
							}, 500);
						}, 400);
					}, 400);
				}, 400);
				$("#ascrail2003").addClass("activateScroll");
			}else{
				$(".pt-page-4 h4, .pt-page-4 h1").fadeOut().removeClass("fadeInUp");
				$(".pt-page-4 h5").fadeOut().removeClass("animated fadeInLeft");
				$(".faqContent").fadeOut().removeClass("animated fadeInDown");
				$(".faqlist").fadeOut();
				$(".faqGroupHeading").removeClass("collapse-down");
				$("#ascrail2003").removeClass("activateScroll");
			}

			/* for sign-up (page-5) custom animateion */
			if($(".pt-page-5").hasClass("pt-page-current")){
				$(".pt-page-5 h4, .pt-page-5 h1").show().addClass("animated fadeInUp");
				$(".pt-page-5 .field1").show().addClass("animated slideInLeft");
				$(".pt-page-5 .field3").show().addClass("animated slideInRight");
				$(".pt-page-5 .field2").show().addClass("animated slideInLeft");
				$(".pt-page-5 .field4").show().addClass("animated slideInRight");
				$(".agreement").show().addClass("animated fadeInDown");
				$(".pt-page-5 .btn-default").show().addClass("animated bounceInUp");
				$("#ascrail2004").addClass("activateScroll");
			}else{
				$(".pt-page-5 h4, .pt-page-5 h1").fadeOut().removeClass("fadeInUp");
				$(".pt-page-5 .field1").fadeOut().removeClass("slideInLeft");
				$(".pt-page-5 .field3").fadeOut().removeClass("slideInRight");
				$(".pt-page-5 .field2").fadeOut().removeClass("slideInLeft");
				$(".pt-page-5 .field4").fadeOut().removeClass("slideInRight");
				$(".agreement").fadeOut().removeClass("fadeInDown");
				$(".pt-page-5 .btn-default").fadeOut().removeClass("bounceInUp");
				$("#ascrail2004").removeClass("activateScroll");
			}

			/* for sign-up (page-5) custom animateion */
			if($(".pt-page-6").hasClass("pt-page-current")){
				$(".pt-page-6 h4, .pt-page-6 h1").show().addClass("animated fadeInUp");
				$(".pt-page-6 .field1").show().addClass("animated slideInLeft");
				$(".pt-page-6 .field2").show().addClass("animated slideInRight");
				$(".loginOptions").show().addClass("animated fadeInDown");
				$(".pt-page-6 .btn-default").show().addClass("animated bounceInUp");
				$("#ascrail2005").addClass("activateScroll");
			}else{
				$(".pt-page-6 h4, .pt-page-6 h1").fadeOut().removeClass("fadeInUp");
				$(".pt-page-6 .field1").fadeOut().removeClass("slideInLeft");
				$(".pt-page-6 .field2").fadeOut().removeClass("slideInRight");
				$(".loginOptions").fadeOut().removeClass("fadeInDown");
				$(".pt-page-6 .btn-default").fadeOut().removeClass("bounceInUp");
				$("#ascrail2005").removeClass("activateScroll");
			}
		}, 1000);
	}

	/* -------------------------------------------------------------------- */

	/* faq page sidebar */
	$(".faqGroupHeading").click(function(){
		var dataID = $(this).attr("data-id");
		if($(this).hasClass("collapse-down")){
			$(".faqGroupHeading").removeClass("collapse-down");
			$("#" + dataID).slideUp(300);
		}else{
			$(".faqGroupHeading").removeClass("collapse-down");
			$(this).addClass("collapse-down");
			$(".faqlist").slideUp(300);
			$("#" + dataID).slideDown(300);
		}
	});

	/* content scroll script */
	$(".faqlist a").click(function(e){
		e.preventDefault();
		var contentId = $(this).attr("href");
		var contentScrollTop = $(".pt-page-4 .pt-page-inner").scrollTop();
		var contentOffTop = $(contentId).offset().top;
		var scrollContent =  contentScrollTop + contentOffTop - 70;
		$(".pt-page-4 .pt-page-inner").animate({
			scrollTop: scrollContent,
		}, "slow");
	});
	$(".gotop").click(function(){
		$(".pt-page-4 .pt-page-inner").animate({
			scrollTop: 0,
		}, "slow");
	});

	/* -------------------------------------------------------------------- */

	/* get started button animation */
	var btnGS = $(".getstarted a");
	btnGS.click(function(e){
		e.preventDefault();
		$(".pt-page-1 h4, .pt-page-1 h1").addClass("fadeOutUp");
		$(".getstarted").addClass("flipOutX");
		setTimeout(function(){
			$(".getstarted_form").show().addClass("flipInX");
			setTimeout(function(){
				$(".getstarted_form").removeClass("flipInX");
			}, 2000);
		}, 1500);

		/* back to default */
		setTimeout(function(){
			$(".pt-page-1 h4, .pt-page-1 h1").removeClass("fadeOutUp").hide();
			$(".getstarted").removeClass("flipOutX").hide();
		}, 1500);
	});

	/* -------------------------------------------------------------------- */

	/* location page */
	$(".location").click(function(){
		var mapLocation = $(this).attr("data-location");
		$(".mapwrapper.showing").addClass("animated fadeOutDown");
		setTimeout(function(){
			$(".mapwrapper.showing").removeClass("showing animated fadeOutDown");
			$("#" + mapLocation).addClass("showing animated fadeInUp");
			setTimeout(function(){
				$("#" + mapLocation).removeClass("animated fadeInUp");
			}, 1000);
		}, 1000);
	});

	/* -------------------------------------------------------------------- */

	/* scroll bar */
	$(window).bind("resizeEnd", function() {
		var winsize_h = $(window).height();
        $(".pt-page-inner").css("height", winsize_h - 53);
	});
	$(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    });

	/* -------------------------------------------------------------------- */

	$(".pt-page-inner").niceScroll({
        cursorwidth: '7px',
        cursorborder: 'none',
        cursorcolor:"#fff",
        cursoropacitymax:0.3,
        railoffset: '5px',
        railalign: 'right',
        preservenativescrolling: false,
        autohidemode: true,
    });

    /* -------------------------------------------------------------------- */

    /* inner page effects */
    $("#pageHeader").show().addClass("animated slideInDown");
    setTimeout(function(){
    	$("#leftSideBar").show().addClass("animated slideInLeft");
    }, 500);
    setTimeout(function(){
    	$("#pageBody").show().addClass("animated slideInRight");
    }, 500);
    setTimeout(function(){
    	$(".pageFooter").show().addClass("animated slideInUp");
    }, 500);
    setTimeout(function(){
		$(".breadcrumbs").show().addClass("animated slideInDown");
		setTimeout(function(){
	    	$(".breadcrumbs").removeClass("animated slideInDown");
	    	setTimeout(function(){
	    		// $("#tab1").addClass("active animated slideInRight");
	    	}, 100);
	    }, 1000);
	}, 1000);
    setTimeout(function(){
    	$("#pageHeader").removeClass("animated slideInDown");
    	$("#leftSideBar").removeClass("animated slideInLeft");
    	$("#pageBody").removeClass("animated slideInRight");
    }, 2000);

	/* -------------------------------------------------------------------- */

	/* left sidebar */
	var winsize = $(window).width();
	var sidebar = $("#leftSideBar");

	if(winsize < 1024){
		setTimeout(function(){
			sidebar.removeClass("activated").addClass("deactivated");
		}, 500);
	}

	$(window).resize(function(){
		var winsize = $(window).width();
		var sidebar = $("#leftSideBar");

		if(winsize < 1024){
			setTimeout(function(){
				sidebar.removeClass("activated").addClass("deactivated");
				$(".leftsidebar-backdrop").hide();
			}, 500);
		}else{
			setTimeout(function(){
				sidebar.removeClass("deactivated").addClass("activated");
				$(".leftsidebar-backdrop").hide();
			}, 500);
		}
	});

	$(".toggleSidebar").click(function(){
		var sidebar = $("#leftSideBar");
		if($(sidebar).hasClass("deactivated")){
			sidebar.removeClass("deactivated").addClass("activated");
			$(".leftsidebar-backdrop").show();
		}else{
			sidebar.removeClass("activated").addClass("deactivated");
			$(".leftsidebar-backdrop").hide();
		}
	});
	$(".leftsidebar-backdrop").click(function(){
		sidebar.removeClass("activated").addClass("deactivated");
		$(".leftsidebar-backdrop").hide();
	});

	/* -------------------------------------------------------------------- */

	/* top drop menu */
	$(".topdropmenu-toggle").click(function(event){
		event.preventDefault();
		var tdmenu = $(this).attr("data-toggle");
		$("#" + tdmenu).slideDown(250);
		$(".topdropmenu-backdrop").show();
	});
	$(".topdropmenu-backdrop").click(function(){
		$(".topdropmenu").slideUp(250);
		$(".topdropmenu-backdrop").hide();
	});

	/* -------------------------------------------------------------------- */

	/* tab page */
	/*$(".tabpage-nav a").click(function(event){
		event.preventDefault();
		var tabID = $(this).attr("href");
		$(".tabpage-wrapper.active").removeClass("animated slideInRight").addClass("animated slideOutRight");
		setTimeout(function(){
			$(".tabpage-wrapper").removeClass("active animated slideOutRight");
			$(tabID).addClass("active animated slideInRight");
		}, 500);

		$(".tabpage-nav a").removeClass("active");
		$(this).addClass("active");
	});*/

	/* -------------------------------------------------------------------- */

	/* alert modal */
	$(".alertmodal-trigger").click(function(event){
		event.preventDefault();
		var amID = $(this).attr("data-toggle");
		$(".alertmodal-backdrop").fadeIn();
		$("#" + amID).removeClass("bounceOutUp").addClass("active animated bounceInDown");
		setTimeout(function(){
			$(".alertmodal").removeClass("bounceInDown");
		}, 1000);
	});
	$(".alertmodal-cancel").click(function(event){
		event.preventDefault();
		$(".alertmodal-backdrop").fadeOut();
		$(".alertmodal").removeClass("bounceInDown").addClass("bounceOutUp");
		setTimeout(function(){
			$(".alertmodal").removeClass("active animated bounceOutUp");
		}, 1000);
	});

	/* -------------------------------------------------------------------- */

	/* new contact */
	$(".newContact").click(function(event){
		event.preventDefault();
		var newCF = $(this).attr("data-toggle");
		$("#" + newCF).removeClass("animated slideOutRight").addClass("active animated slideInRight");
		setTimeout(function(){
			$("#" + newCF).removeClass("animated slideInRight");
		}, 1000);
	});
	$(".cancelNewContact").click(function(event){
		event.preventDefault();
		var cancelCF = $(this).attr("data-toggle");
		$("#" + cancelCF).removeClass("animated slideInRight").addClass("animated slideOutRight");
		setTimeout(function(){
			$("#" + cancelCF).removeClass("active animated slideOutRight");
		}, 1000);
	});

});

	function myFunction(){
		window.location = 'dashboard.html';
	}


// tabs

$( "#history_tab" ).on( "click", function( event ) {
    loadURL("/history", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

$( "#contacts_tab" ).on( "click", function( event ) {
    loadURL("/contacts", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});
$( "#transaction_tab" ).on( "click", function( event ) {
    loadURL("/transaction", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

// tabs dashboard

$( "#history_tab" ).on( "click", function( event ) {
    loadURL("/history", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

$( "#contacts_tab" ).on( "click", function( event ) {
    loadURL("/contacts", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});
$( "#transaction_tab" ).on( "click", function( event ) {
    loadURL("/transaction", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

$( "#profile_link" ).on( "click", function( event ) {
    loadURL("/profile", $('#page-container'));
    $(".profilebtn").removeClass("active");
    $(this).addClass("active");
});

//tab dashboard-admin
$( "#user_tab" ).on( "click", function( event ) {
    loadURL("/users", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

$( "#transaction_admin_tab" ).on( "click", function( event ) {
    loadURL("/admin_transaction", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

$( "#history_admin_tab" ).on( "click", function( event ) {
    loadURL("/admin_history", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

$( "#locker_tab" ).on( "click", function( event ) {
    loadURL("/add_locker", $('#page-container'));
    $(".tabs").removeClass("active");
    $(this).addClass("active");
});

