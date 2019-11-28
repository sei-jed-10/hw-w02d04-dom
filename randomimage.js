const button=  document.querySelector("#randomize");

   const  width1   = document.querySelector("width");
    const   height1 =  document.querySelector("height");
    var allImages = document.querySelectorAll("image");
 
    var widthValue =width.value; 
    
    var highhValue =height.value; 
     width1.style.width =  widthValue+"px"; 
      height1.style.height=highhValue+"px";

      image = [...allImages];
 
      for(let img of image  ){            
      var  randomimage=  Math.floor( Math.random()*image[img]  )
     image= image[randomimage]
    
    }
button.addEventListener(click,Responseclick)
  
 function Responseclick(event){   
  let evt =event.target;  
if( evt.matches('button')  ){ 
 






}



 }



