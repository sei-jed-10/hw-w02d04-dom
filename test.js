let body = document.querySelector('body')



body.style.fontFamily="Arial, sans-serif";
console.log("mm")

let  nickname = document.querySelector('#nickname')
 nickname.innerText="mohammed";

let favorite=document.querySelector('#favorite')
  favorite.innerText="Lion";
let hometown=document.querySelector('#hometown')
hometown.innerText="Medinah";
let ul = document.querySelector('ul')
 ul.children[0].className="istitem"
 ul.children[1].className="istitem"
 ul.children[2].className="istitem"
let list =  document.querySelector('.istitem')

 
ul.children[0].style.color="rebeccapurple"; 
 ul.children[1].style.color="rebeccapurple";
 ul.children[2].style.color="rebeccapurple";
  let profilePicture=document.querySelector('.profilePicture')
  let img =   document.createElement('img')
  img.setAttribute("src", "computer.jpg");
  profilePicture.appendChild(img);

    let h2 = document.createElement("h2")
    let favoriteBooks = document.querySelector(".favoriteBooks");
    favoriteBooks.appendChild(h2);

   h2.innerText="My Book List";

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

let  book;
for( let i =0 ;i<books.length;i++){ 

  
book= document.createElement("p");
 
  book.innerText=books[i].title + " by, "  +books[i].author;
  favoriteBooks.appendChild(book);

}
      

