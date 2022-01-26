let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc ==='images/firefox-icon.png') {
        myImg.setAttribute('src','images/firefox2.svg');
    } else {
        myImg.setAttribute('src','images/firefox-icon.png');
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
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }



myButton.onclick = function() {
    setUserName();
  }