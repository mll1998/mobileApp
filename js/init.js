if(window.innerWidth && window.innerWidth <= 480){
	$(document).ready(function(){
		$('#nav ul').addClass('hide');
		$('#header').append('<div class="menu" onclick="toggleMenu()">Menu</div>')
	});
	function toggleMenu(){
		$('#nav ul').toggleClass('hide');
		$('#header .menu').toggleClass('active');
	}
}