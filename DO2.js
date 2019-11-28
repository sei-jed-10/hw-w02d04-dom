let body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
body.style.textAlign = 'center';
let span = document.querySelectorAll('span');
span[0].textContent ='Dalia';
span[1].textContent ='Dog';
span[2].textContent = 'Jeddah';
let li = document.querySelectorAll('li');
for( let i = 0; i < li.length; i++){
    li[i].setAttribute('class','listitem');
    li[i].style.color = 'redeccapurple';
}
let img = document.createElement('img');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Me%21.png/220px-Taylor_Swift_-_Me%21.png');
let profilePicture = document.querySelector('.profilePicture');
profilePicture.appendChild(img);
console.log(img);
