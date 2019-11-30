const button=  document.querySelector("#randomize");

   const  width1   = document.querySelector("width");
    const   height1 =  document.querySelector("height");
    var allImages = document.querySelector(".image");
 
       var imag= document.createElement("img")
     allImages.appendChild(imag);
         

    // var highhValue =height.value; 
    //  width1.style.width = widthValue+"px"; 
    //   height1.style.height=highhValue+"px";
       
        
   button.addEventListener('click',Responseclick)
  
 function Responseclick(evet){   
  console.log("click");
     
  evet.imag.innerHTML= imag.setAttribute("src","https://source.unsplash.com/random");




}



 



