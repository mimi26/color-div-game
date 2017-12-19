
const zones = document.getElementsByClassName('zone');
let index = Math.floor(Math.random() * (6));
let currentDiv = zones[index];
let usedNumArr = [index];

function setCurrentDiv(num) {
    currentDiv = zones[num];
    return currentDiv;
}

function checkIfUsedIndex(num, arr) {
    if (arr.indexOf(num) === -1) {
        arr.push(num);
         setCurrentDiv(num)
    } else if ((arr.indexOf(num) !== -1) && (arr.length < 6)) { 
         checkIfUsedIndex(Math.floor(Math.random() * (6)), arr)
    }
}

function onMouseOver(event) {
    if(event.target === currentDiv) {
        event.target.style.background = "green";
    } else {
        event.target.style.background = "red";
    }
}

function onMouseLeave(event) {
    event.target.style.background = "none";
}

function onClick(event) {
    if (event.target === currentDiv) { 
        event.target.style.background = "green";
        event.target.removeEventListener('mouseover', onMouseOver);
        event.target.removeEventListener('mouseleave', onMouseLeave);
        event.target.removeEventListener('click', onClick);
        checkIfUsedIndex(index, usedNumArr);
    }
}

for (let i = 0; i < zones.length; i++) {
   zones[i].addEventListener('mouseover', onMouseOver);
   zones[i].addEventListener('mouseleave', onMouseLeave);
   zones[i].addEventListener('click', onClick);
}



