let notes = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b','c','c#','d','d#','e','f','f#','g','g#','a','a#','b','c']
const majorScale = [2,2,1,2,2,2,1];
const minorScale = [2,1,2,2,1,2,2];


let randomScale = [];
let root;
const generateRandomScaleEasy = () => {
  let rand = Math.floor(Math.random() * 12);
  console.log('rand',rand);

  root = notes[rand];
  console.log('root',root)
  for(let i=0; i < 8; i++){
    randomScale.push(root)
    rand += majorScale[i];
    root = notes[rand];
    
  }
  console.log(randomScale);
}


generateRandomScaleEasy();
//fisher-yates shuffle 

function shuffle (array) {
  let i = 0
  let j = 0
  let temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const easyMode = () =>{
  //shuffle the array in place 
  //random scale is a queue
  //play root note and whichever note thats the next to come out until the array is empty
}