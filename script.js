

$('document').ready(function(){
	
	$('#randomize').click(function(){
		

		var img = $('<img id = "dynamic">');
		//img.src = "https://source.unsplash.com/random";
		
		//$('.image').appendChild(img);

		img.attr('src',"https://source.unsplash.com/random");
		img.appendTo('.image');
	});

});
