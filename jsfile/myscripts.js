$(document).ready(function() {	

	$('#btnAll').addClass('btn-primary');
	$('#btnAll').toggleClass( "active" );
	
	$(".filter-button").click(function(){
	        var value = $(this).attr('data-filter');
	        
	        if(value == "all")
	        {
	            //$('.filter').removeClass('hidden');
	            $('.filter').show('1000');
	        }
	        else
	        {
	            $(".filter").not('.'+value).hide('3000');
	            $('.filter').filter('.'+value).show('3000');
	            
	        }
	});


	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#myNavbar').toggleClass("open");
	});	
	
	$('#btnAll').click(function(){
		remove();
		$('#btnAll').addClass('btn-primary');
		$('#btnAll').toggleClass( "active" );

	});
		
	$('#btnWeb').click(function(){
		remove();
		$('#btnWeb').addClass('btn-primary');		
		$('#btnWeb').toggleClass( "active" );
	});
	
	$('#btnJava').click(function(){	 
		remove();
		$('#btnJava').addClass('btn-primary');
		$('#btnJava').toggleClass( "active" );

	});
	
	$('#btnGrap').click(function(){	
		remove();	
		$('#btnGrap').addClass('btn-primary');
		$('#btnGrap').toggleClass( "active" );

	});
	
});

function remove(){
	$('.btn').each(function(i, btn){
	        if($(btn).hasClass('active') ){
	        	$(btn).removeClass( 'active');
	        	$(btn).removeClass('btn-primary');
	
	        }
    	});
}	

// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#myNavbar');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}