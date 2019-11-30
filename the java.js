
$(document).ready(function() {


    $("body").css({"font-family": "Arial, sans-serif"});

    $('#nickname').text("Dado"); 
    $('#favorite').text("Cats"); 
    $('#hometown').text("Jeddah"); 

    $("li").addClass("listitem");
    $(".listitem").css({"color":"rebeccapurple"});

    var img = $('<img>');
    img.attr('src', "Pic.jpg");
    img.appendTo("div.profilePicture");

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


      var h1 = $("<h1>My Book List</h1>");
      h1.appendTo("div.favoriteBooks");
      
      //Iterate through the array of books. For each book, 
      //create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page  


          for (var i =0;i<books.length;i++) {
            var bTitle = books[i].title;
            var bAuthor = books[i].author;
            var Book = $("<p>"+bTitle+", by "+bAuthor+"</p>");
            Book.appendTo("div.favoriteBooks");
        }


 });