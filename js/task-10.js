const inputRef = document.querySelector('input');
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const mainBox = document.querySelector('#boxes');


inputRef.addEventListener('input', count)
createBtn.addEventListener('click', createInitialBox)
destroyBtn.addEventListener('click', destroyAction)



function destroyAction(){
    
    mainBox.innerHTML = ''

}

function createInitialBox (){

const boxes = [];
    for (let i =0; i < Number(inputRef.value); i++){
       boxes.push(createCloneBox(i+1) ) 
    }
    mainBox.append(...boxes)
}


const initialSize = 30;

function createCloneBox(num){

    const otherBox = document.createElement('div')
    
    otherBox.style.backgroundColor = getRandomColor();
    otherBox.style.width = (initialSize * (mainBox.children.length + num)) + 'px';
    otherBox.style.height = (initialSize * (mainBox.children.length + num)) + 'px';
    return otherBox;
    
}



function count (event){
    console.log(event.target.value);
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }