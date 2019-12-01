function getImage() {

  var randomImg = document.createElement("img");
  randomImg.setAttribute("src", "https://source.unsplash.com/");
  var imgDiv = document.createElement("div.image");
  imgDiv.appendChild(randomImg);
}

var imgButton = document.querySelector("button");

imgButton.addEventListener("click", getImage);
