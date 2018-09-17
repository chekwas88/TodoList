$('ul').on('click', 'li',  function(){
	$(this).toggleClass('clicked-li');

});

$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$('input[type = text]').keypress(function(event){
	if (event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="far fa-trash-alt"></i> </span>' + newTodo + '</li>');
	}
});

$(".fa-arrow-alt-circle-down").click(function(){
	$("input[type='text']").fadeToggle();
});