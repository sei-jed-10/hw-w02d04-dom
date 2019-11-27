window.onload = function () {
    var i = document.getElementById("randomize")
  i.addEventListener("click", function(){
     // alert ("Hello World!");
      var img = document.createElement("IMG");
      img.src = "https://source.unsplash.com/random";
      document.body.appendChild( img);
     // var d= document.getElementsByClassName("image");
     //document.getElementsByClassName("image").appendChild(img);

    img.style.width = document.getElemntByClassName("width").value ;
    img.style.height = document.getElemntByClassName("height").value;
  });
  };
  