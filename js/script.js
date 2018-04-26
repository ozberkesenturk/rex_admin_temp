// check width
function checkWidth() {
    $('#sidebar').animate({ 'z-index': '0' }, 0);
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize = 992) {
        var margin = parseInt($('.navbar').css('margin-left'));
        if (margin == 220) {

            $('#content-container,.navbar').css({ 'margin-left': '0' });

        } else {
            $('#content-container').css({ 'margin-left': '0' });
        }
       


    } else {
        $('#content-container,.navbar').css({ 'margin-left': '220px' });
    }
}


$(window).resize(checkWidth);


//Sidebar open-close
$('.sidebar-open-close a').bind({
    click: function () {



        var margin = parseInt($('.navbar').css('margin-left'));
        
        if (margin == 220) {
           
            $('#content-container,.navbar').animate({ 'margin-left': '0' }, 300);
            $('#sidebar').animate({ 'z-index': '0' }, 0);
            
        } else {
            if (window.matchMedia('(max-width: 992px)').matches) {
                $('.navbar').animate({ 'margin-left': '220px' }, 300);
                $('#sidebar').animate({ 'z-index': '1' },0);


            } else {
                $('#sidebar').css({ 'z-index': '0' });
                $('#content-container,.navbar').animate({ 'margin-left': '220px' }, 300);
              
            }
            
        }




    }
});



// Top-Menu Search 
$('#searchBtn').bind({

    click: function () { }, //search function
		mouseenter: function(){

			$('#searchText').show("slide",600);

		},

});

//document click
$(document).on("click", function (e) {
    
   if (e.target.id!=$('#searchText').attr('id')) {
   		$('#searchText').hide("slide","",600);
   }
  
});

$('#list-group-toggle').bind ({
	mouseenter: function(){

		function loop() {
        $('#list-group-toggle span').css({top:0});
        $('#list-group-toggle span').animate ({
            top: '-=3',
        }, 600, 'linear', function() {
            loop();
        });
    }
    loop();

		},
	mouseleave: function(){

		$('#list-group-toggle span').stop();

	},
	click: function(){
		

			$('#list-group2').toggle(600,function(){


				if ($( "#list-group-toggle span" ).hasClass( "icon-up-open" ))
				{
					$('#list-group-toggle span').addClass('icon-down-open');
					$('#list-group-toggle span').removeClass('icon-up-open');
					
					

				}else{
					$('#list-group-toggle span').addClass('icon-up-open');
					$('#list-group-toggle span').removeClass('icon-down-open');
				}

				});
			}
});

//Top-menu icons events
$('#user-notification-globe').bind({
	mouseenter:function(){
		$( '#user-notification-globe .topmenuBadge' ).effect( 'bounce', '', 500 );
	}
});

$('#user-notification-mail').bind({
	mouseenter:function(){
		$( '#user-notification-mail .topmenuBadge' ).effect( 'bounce', '', 500 );
	}
});



//scrool reaction of top-menu and side bar
function checkScroll() {
    var startY = $('#navbar').height();

    if ($(window).scrollTop() > startY) {
        $('#navbar').addClass("scrolled-navbar");
        $('#user-menu,.user-notification,#searchBtn span,.navbar-right li .navbar1-link,.sidebar-open-close i').addClass('scrolled-navbar-link');

        $('.sidebar-title').addClass('scrolled-sidebar-title');
        $('.sidebar-title h1').css({ 'line-height': '50px', 'transition': '0.35s' });
      } else {
        $('#navbar').removeClass("scrolled-navbar");
        $('#user-menu,.user-notification,#searchBtn span,.navbar-right li .navbar1-link,.sidebar-open-close i').removeClass('scrolled-navbar-link');
        $('#navbar').addClass(".navbar"); // for transition

        $('.sidebar-title').removeClass('scrolled-sidebar-title');
        $('.sidebar-title h1').css({'line-height':'60px','transition':'0.35s' });
        $('.sidebar-title').addClass(".sidebar-title"); // for transition
    }
}

if ($('#navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}

// add icons for sidebar's sublinks
$('.panel-body ul li a').before('<i class="icon-record-outline"></i>');
$('.panel-body ul li a').bind({
    mouseenter: function () {
        $(this).prev().css("cssText", "color:#bfbfbf !important; transition:0.35s;")

    },
    mouseleave: function () {
        $(this).prev().css("cssText", "color:#666000 !important; transition:0.15s;");

    }
});

$('.panel-heading').bind({
    mouseenter: function () {
        $(this).animate({
           color: '#bfbfbf',
        }, 400, 'linear')},
    mouseleave: function () {
        $(this).animate({
            color:'#666600',
        },400,'linear')}
});

//active panel 
$(document).ready(function () {
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings("a").children().addClass('active-panel');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings("a").children().removeClass('active-panel');
    });
});

//onload animations 
$(document).ready(function () {
    $('.col-lg-3').hide("scale", "", 1);
    $('.col-lg-3').show("slide", "", 800);

});

