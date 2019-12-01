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
  var width1 = input.getAttribute("width");
  var hight1 = input.getAttribute("hight");

  var myButton = document.querySelector("#randomize");

  myButton.addEventListener("click", function() {
    //node element add new src with new src atribu that been created.
    document.getElementById("changeSize").width = width1;
    document.getElementById("changeSize").hight = hight1;
    newImg.setAttribute("src", "https://source.unsplash.com/1600x900");
  });
  // };
};
