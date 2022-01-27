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

