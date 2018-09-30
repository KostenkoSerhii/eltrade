function navInit() {

	$(".js-burger").on('click', function(){
		$(".js-nav").slideToggle();
	})




	$(document).on('click', function(e){
		let container = $(".js-nav-wrapper");
		if (!container.is(e.target) && container.has(e.target).length === 0 && $(window).width() <1024) 
		{
			$(".js-nav").slideUp();
		}
	})



}
module.exports = navInit;