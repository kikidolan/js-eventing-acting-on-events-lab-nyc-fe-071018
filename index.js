const element = document.getElementById('dodger')

document.addEventListener('keydown', (event) => {
 console.log(event)
 if (event.which === 37) {
   event.style.backgroundColor = 'yellow'
   
 }
})