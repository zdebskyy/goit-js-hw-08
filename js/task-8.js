
const lighthers = document.querySelectorAll('.lighters');
const onBtn = document.querySelector('button[data-condition="on"]')
const offBtn = document.querySelector('button[data-condition="off"]')
const RndBtn = document.querySelector('button[data-condition="random"]');
console.log(lighthers);


onBtn.addEventListener('click', turnOn)
offBtn.addEventListener('click', turnOff)


function turnOn (){
   
    lighthers.forEach(el =>  console.log(el));
    

}


function turnOff (){
    
  
}