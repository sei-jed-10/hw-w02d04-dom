var elements = document.querySelector("*")

elements.style.fontFamily = "Arial, sans-serif";

document.querySelector("#nickname").innerText = "Hello there"
document.querySelector("#favorite").innerText = "Nothing"
document.querySelector("#hometown").innerText = "red sea"



let li = document.querySelectorAll("li")
for (ele of li) {
    ele.setAttribute("class", "listitem")
    ele.style.color = "rebeccapurple"
}



var element = document.createElement("img");
element.setAttribute('src', "https://source.unsplash.com/1600x900")
document.getElementsByClassName("profilePicture")[0].appendChild(element)

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

element = document.createElement("h1");
element.innerText = "My Book List"
let favBooks = document.getElementsByClassName("favoriteBooks")[0]
favBooks.appendChild(element)

for (const book of books) {
    element = document.createElement("p");
    element.innerText = `${book['title']}, by ${book['author']}`
    favBooks.appendChild(element)
}




