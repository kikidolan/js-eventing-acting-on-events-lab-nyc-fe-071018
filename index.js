const element = document.getElementById('dodger')

document.addEventListener('keydown', (event) => {
 console.log(event)
 let previousLeft = element.style.left
 if (event.which === 37 ) {
    
    let previousLeftNumber = parseInt(previousLeft.replace('px', ""), 10)
    let newLeftNumber = (previousLeftNumber -1) + "px"
    element.style.left = newLeftNumber
 }
})