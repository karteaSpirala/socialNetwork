$(document).ready(function(){

function newPost(e) {
	e.preventDefault()
	var $container = $("#postText")
	var $divPost =  $("<div />", {'class': "col-sm-9 well"})
	var $input = $("#input")
	var post = $input.val()
	var $sendPost =  $("<button />",  {'class': "btn-me col-sm-3"})
	$sendPost.html($shareIcon)

	$divPost.append(post)	
	$divBar.append($sendPost)		
	$container.prepend($divPost)
	$input.val(" ")

	
}



});

