$(document).ready(function(){
 
    document.body.style.fontFamily = ("Arial, sans-serif");

    var str1 =  $("#nickname");
    str1.text("Abdulrahman Alsulami");
    var str2 = $("#favorite");
    str2.text("Cheetah");
    var str3 = $("#hometown");
    str3.text("Makkah");

   var list= $("li")
    list.addClass("listitem");
list.css("color","rebeccapurple");

var addPic = $('.profilePicture')
addPic.prepend('<img class="profilePicture" src="https://images.unsplash.com/photo-1572457391165-eaf92b4a7457?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />')

});



