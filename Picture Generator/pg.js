
$(document).ready(function(){
  $("body").prepend("<P> Please specify the image's width and height:</p>")
  $("#randomize").click(function(){
    $("div.image").empty();
    var width=$("input.width").val();
    var height=$(".height").val();
    var img = $('<img>');
    img.attr('src','https://source.unsplash.com/random')
    img.css({'width':width,'height':height})
    $("div.image").append(img);
  });
});
