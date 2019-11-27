
//   - Change the font-family of the page to `"Arial, sans-serif"`
//   - Replace each of the `span` tags (nickname, favorite, hometown) with your own information
// (e.g. put your nickname in the nickname span)
//   - Give each `li` the class of `"listitem"`
//   - Change each `li`'s text color to `"rebeccapurple"`
//   - Create a new `img` element and set its `src` attribute to a picture of you.
// Put that new `img` element in the div with the class of `"profilePicture"`

document.getElementsByTagName("body").style.fontFamily = "Arial, sans-serif";

var n = document.getElementsById("nickname") ;
n.setAttribute("span", "doji");
var f = document.getElementsById("favorite") ;
f.setAttribute("span", "sleep");
var h = document.getElementsById("hometown") ;
h.setAttribute("span", "jeddah");

document.querySelectorAll("li").setAttribute("class","listitem");

document.querySelectorAll("li").style.color("rebeccapurple");

var img = document.createElement("IMG");
img.src = "https://source.unsplash.com/random";
var d= document.getElementsByClassName("profilePicture")
document.d.appendChild(img);

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
// - Iterate through the array of books. For each book, create a `p` tag with the book title and author
// (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

var heading = document.createElement("h1");
heading.innerText = "My Book List";
var d= document.getElementsByClassName("favoriteBooks");
document.d.appendChild(heading);
var newp = "";

for(i=0;i<books.length;i++){
newp = books[i].setAttribute("p",books[i].title + " , by " + books[i].author);
document.body.appendChild(newp);
}

document.querySelectorAll("p").setAttribute("ul",querySelectorAll("p").innerText);
