
$(document).ready(function(){
  $("#randomize").click(function(){
    $("div.image").empty();
    var width=$("input.width").val();
    var height=$(".height").val();
    var img = $('<img>');
    img.attr('src','https://source.unsplash.com/random')
    img.css('height',height);
    img.css({'width':width})
    $("div.image").append(img);
  });
});
