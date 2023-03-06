// on input, get value and save it as 'storedValue'

function changeColor() { 
  let userColor = document.getElementById('colorID').value;
  let userColor2 = document.getElementById('colorID2').value;
  localStorage.setItem('storedValue', document.body.style.backgroundColor = userColor);
  localStorage.setItem('storedValue2', document.body.style.color = userColor2);
}
console.log(localStorage.storedValue)
console.log(localStorage.storedValue2)

// if there is a value stored, update color picker and background color

setInterval(()=>{if(localStorage.storedValue || localStorage.storedValue2 ) {
  document.getElementById('colorID').value = localStorage.storedValue;
  document.body.style.backgroundColor = localStorage.storedValue;
  document.getElementById('colorID2').value = localStorage.storedValue2;
  document.body.style.color = localStorage.storedValue2;
}},1)


export default changeColor