$(function(){
	// Activate isotope
	$('#isotope').isotope({
	itemSelector : '.item',
	});

	// filter items when filter link is clicked
	$('#filters button').click(function(){
	var selector = $(this).attr('data-filter');
	$('#isotope').isotope({ filter: selector });
	return false;
	});
});