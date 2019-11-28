
document.querySelector(".page").style.fontFamily = "Arial, sans-serif";

document.querySelector("#nickname").innerText="h_nooh";
document.querySelector("#favorite").innerText="Fish";
document.querySelector("#hometown").innerText="Jeddah";

document.querySelectorAll("li").className="listitem";

document.querySelector("#personalInfo").style.color="rebeccapurple";

var img=document.querySelector("img")
img.src="profilePic.png";


var newH1 = document.createElement( "h1" );
newH1.innerText = "My Book List";
document.body.appendChild(newH1);

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
  
  for(var key in books){
      var newPara = document.createElement( "p" );
      newPara.innerText = books[key].title+" by "+books[key].author;
      document.body.appendChild( newPara );
  }

  

