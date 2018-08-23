const element = document.getElementById('dodger')

document.addEventListener('keydown', (event) => {
 console.log(event)
 if (event.which === 37) {
    let previousLeft = element.style.left
    let previousLeftNumber = parseInt(previousLeft.replace('px', ""), 10)
    console.log(previousLeftNumber)
 }
})