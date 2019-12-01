/** 
 * Change the font-family of the page to "Arial, sans-serif"
Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
Give each li the class of "listitem"
Change each li's text color to "rebeccapurple"
Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
*/

window.onload = function() {
  // /* get the element*/

  var newImg = document.createElement("img");
  var src = document.createAttribute("src");
  var id = document.createAttribute("id");
  var width = document.createAttribute("width");
  var hight = document.createAttribute("hight");

  document.body.appendChild(newImg);

  //set Attributes to the new img node

  newImg.setAttribute("id", "changeSize");

  //get the value from the input
  //   var width1 = input.getAttribute("width");
  //   var hight1 = input.getAttribute("hight");

  var myButton = document.querySelector("#randomize");

  myButton.addEventListener("click", function() {
    node element add new src with new src atribu that been created.
    document.getElementById("changeSize").width = width1;
    document.getElementById("changeSize").hight = hight1;
    newImg.setAttribute("src", "https://source.unsplash.com/1600x900");
  });
  // };
};

var body = body.getAttribute(style);
//
alert(body);
