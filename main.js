const page = document.querySelector('body')
page.style.fontFamily = "Arial, sans-serif";

const nickname = document.querySelector("#nickname");
nickname.innerText = "Arif";

const favorite = document.querySelector("#favorite");
favorite.innerText= "Cats";

const hometown = document.querySelector("#hometown");
hometown.innerText= "Jeddah";

const className = document.querySelectorAll('li');
for(let i =0; i<className.length;i++){
className[i].setAttribute("class","listitem");
className[i].style.color ="rebeccapurple"
}

const profileImage = document.createElement('img');
profileImage.setAttribute('src','IMG_1224.jpg')
const img = document.querySelector('.profilePicture')
img.appendChild(profileImage);


var  books = [
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

const title = document.createElement('h1')
  title.innerText="My Book List"

  const list = document.querySelector('div.favoriteBooks')
  list.appendChild(title)
  for(let i =0; i<books.length;i++){
      var paragraphBook = document.createElement('li');
      
      paragraphBook.innerText= books[i].title +" by "+books[i].author;
    list.appendChild(paragraphBook);
    


  }
  
  
  

