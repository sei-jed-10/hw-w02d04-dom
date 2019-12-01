document.body.style.font-family = "Arial, sans-serif"

var spans = document.querySelectorAll("span");

spans[0].innerText = "Abdullah" ;
spans[1].innerText = "cats" ;
spans[2].innerText = "Jeddah" ;

var allLists = document.querySelectorAll("li");
for (var i =0; i<allListItems.length;i++)
{
var list = allLists[i];
list.setAttribute("class", "listitem");
list.style.color = "rebeccapurple";
}


var newImg = document.createElement("img");
newImg.setAttribute("src", "https://cdn.shopify.com/s/files/1/0011/0552/articles/summer_blog_10f1eb24-f326-4137-9437-eb42fc5e32a9_1600x.jpg?v=1530305440")

var newDiv = document.createElement("div.profilePicture");
newDiv.appendChild(newImg);



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



var newHeader = document.createElement("h1");
newHeader.innerText = "My Book List";

var favBooks = document.createElement("div.favoriteBooks");
favBooks.appendChild(newHeader);


  for (var i =0;i<books.length;i++) 
  {
  
      var booksList = document.createElement('li');
      booksList.innerText = books[i].title +", by "+books[i].author;  
  }




















