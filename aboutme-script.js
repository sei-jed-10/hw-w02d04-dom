

$('document').ready(function(){
	$('body').css('font-family','Arial, sans-serif');

	$('#nickname').text('ima');
	$('#favorite').text('elephant');
	$('#hometown').text('makkah');

	$('li').addClass('listitem');
	$('li').css('color','rebeccapurple');
	$('.profilePicture').after('<img src = "images/logo.png" hieght=286 width=286>');

	var h = document.createElement('h1');
	h.innerText = 'My Book List';
	document.body.appendChild(h);
	//$('.favoriteBooks').appendChild(h);
	//(h).appendChild()
var books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: true
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: true
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true
  }
];

//console.log(books);
	for(var key in books){
		var newp = document.createElement( "p" );
	  	newp.innerText = books[key].title+" by "+books[key].author;
	  	document.body.appendChild( newp );
		
	}


	



});

