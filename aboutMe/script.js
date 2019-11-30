// - Create a JavaScript file, and link it up
// done
$(document).ready(function(){
// - Change the font-family of the page to `"Arial, sans-serif"`
$("body").css("font-family", $(this).val("Arial, sans-serif"));
// - Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
$("#nickname").replaceWith("iFaisalo.");
$("#favorite").replaceWith("Puppy.");
$("#hometown").replaceWith("Jeddah City.");
// - Give each `li` the class of `"listitem"`
$("li").addClass("listitem");
// - Change each `li`'s text color to `"rebeccapurple"`
$(".listitem").css("color", "rebeccapurple");
// - Create a new `img` element and set its `src`
// attribute to a picture of you.
// Put that new `img` element in the div with
// the class of `"profilePicture"`
$("<img src='/Users/faisalo/Documents/GA/sei_10/homeworks/hw-w02d04-dom/aboutMe/img/myLogo.png'/>").appendTo("div.profilePicture");

// -- -- -- -- -- -- -- -- -- --

// ## The Book List

// Copy this data into your JavaScript file:
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
// - Create an `h1` with the text of "My Book List", and put it inside `div.favoriteBooks`
$("<h1>My Book List</h1>").appendTo("div.favoriteBooks");
// - Iterate through the array of books.
// For each book, create a `p` tag with the book title and author
// (e.g. "The Most Human Human, by Brian Christian").
// Append it to the page
for (let i = 0; i < books.length; i ++) {
  let title = books[i].title;
  let author = books[i].author;
  $("<p>title by author.</p>").appendTo("div.favoriteBooks");
};
});
