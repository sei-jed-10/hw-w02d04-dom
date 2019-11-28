
let random = document.querySelector('#randomize');
random.addEventListener('click',function(){
    let img = document.createElement('img');
    img.setAttribute('src','https://source.unsplash.com/random');
    let imageRandom = document.querySelector('.image');
    imageRandom.appendChild(img);
})
