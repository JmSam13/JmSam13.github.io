let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first-image.jpg') {
      myImage.setAttribute('src','images/gunpla.jpg');
    } else if(mySrc === 'images/gunpla.jpg') {
      myImage.setAttribute('src','images/first-image.jpg');
    } else{
	  myImage.setAttribute('src','images/manual.jpg');
	}  
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the world of Gunpla, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Gunpla is freedom, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}