var books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCover:"images/b1.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCover:"images/b2.jpg"
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: true,
    bookCover:"images/b3.jpg"
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: true,
    bookCover:"images/b4.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true,
    bookCover:"images/b5.jpg"
  }
];
$(document).ready(function(){

$("html").css({"font-family":"Arial, sans-serif"})
$("#nickname").append("Sarah");
$("#favorite").append("Cats");
$("#hometown").append("Jeddah");
$("li").addClass("listitem");
$("li").css({"color":"rebeccapurple"})
$("div.profilePicture").append("<img src=images/picture.jpg width=200px height=200px>")
$("div.favoriteBooks").append("<h1> My Book List </h1>")

$("div.favoriteBooks").append("<ul id='booksList'></ul>")

for(i=0;i<books.length;i++){
    var book=$("<li>");
      book.text(books[i].title+", by "+books[i].author);
  if(books[i].alreadyRead){
    book.css({"color":"red"});
  }
  $("#booksList").append(book)
  $("#booksList").append("<br>")

  var bookCov=$("<img>")
  $(bookCov).attr("src",books[i].bookCover)
  $(bookCov).attr("width","300px")
  $(bookCov).attr("height","500px")
  $("#booksList").append(bookCov)

  $("#booksList").append("<br>")
  $("#booksList").append("<br>")

}

});
