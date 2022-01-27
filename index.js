const painting = document.querySelector('.painting')
let blue = document.querySelector('#blue')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let green = document.querySelector('#green')

blue.addEventListener('click',function(e){
    selectedColor = 'blue'
})
red.addEventListener('click',function(e){
    selectedColor = 'red'
})
yellow.addEventListener('click',function(e){
    selectedColor = 'yellow'
})
green.addEventListener('click',function(e){
    selectedColor = 'green'
})
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

let clearButton = document.createElement('div')
clearButton.textContent = "Clear"
let palette = document.querySelector('.palette')
palette.append(clearButton)

clearButton.addEventListener('click', function(){
    painting.style.backgroundColor = 'white'
})