//Check Off toDos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})

// activate X button for remove li

$("ul").on("click", "span", function(evt){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	evt.stopPropagation();
})

//adding new toDos

$("input[type = 'text']").on("keypress", function(evt){
	if (evt.keyCode === 13) {
		//grabing new toDoText
		var newToDo = $(this).val();
		$(this).val(" ")
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>  " + newToDo + "</li>")

	}
})

$(".fa-plus-square").on("click", function(){
	$("input").fadeToggle()
})