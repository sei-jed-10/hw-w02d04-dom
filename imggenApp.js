function createImg(){

    let image = document.createElement("img");
    let srcText = image.setAttribute("src","https://source.unsplash.com/1600x900");
    let div = document.querySelector(".image");
    div.appendChild(image);
};


document.querySelector('#randomize').addEventListener('click', createImg());