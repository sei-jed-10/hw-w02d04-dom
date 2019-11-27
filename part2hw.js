let body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
body.style.textAlign = 'center';


let span = document.querySelectorAll('span');
span[0].textContent ='Razan';
span[1].textContent ='cat';
span[2].textContent = 'Jeddah';


let li = document.querySelectorAll('li');
for( let i = 0; i < li.length; i++){
    li[i].setAttribute('class','listitem');
    li[i].style.color = 'redeccapurple';
}


let img = document.createElement('img');
img.setAttribute('src','https://www.mscareergirl.com/wp-content/uploads/2017/03/engineer-woman-pixy.png');
let profilePicture = document.querySelector('.profilePicture');
profilePicture.appendChild(img);
console.log(img);