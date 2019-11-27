// document.body.style.fontFamily = "Arial, sans-serif";
//  var s = document.getElementById("nickname") ;
//  s.textContent = "Safwan"; 

//  var a = document.getElementById("favorite") ;
//  a.textContent = "coding" ;

//  var h = document.getElementById("hometown") ;
//  h.textContent = "Almadinah" ;
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
    
 

 $(document).ready(function(){

    $("li").addClass("listitem");

    $(".listitem").css("color" , "rebeccapurple") ;
    
     $("#nickname").text("Safwan") ;
    $("#favorite").text("coding") ;
    $("#hometown").text("Almadinah") ;
    $("body").css("font-family" , "Arial, sans-serif") ;
    var img1 = $("<img>",{src:"https://source.unsplash.com/random"} );
 
    $(".profilePicture").append(img1);
    var h1 = $("<h1>" ,{text:"My Book List"});
    $("div.favoriteBooks").append(h1) ;

    // Iterate through the array of books. For each book, create a p tag with the book title and author
    //  (e.g. "The Most Human Human, by Brian Christian"). Append it to the page
    // $.each(books , function( index , value){
    //     var pBooks = $("<p>" ,{text: index } ) 
    //     $("body").append(pBooks);
        $.each(books , function(  ){
        $.each(this , function(index , value){

            
             var pBooks = $("<p>" ,{text:   value } ) 
            $("body").append(pBooks);
        
            
            
        }
    ) 


 });
 
});
 
//  var img = $('<img id="dynamic">');  
//  img.attr('src', "https://source.unsplash.com/random");
//  img.appendTo('body');