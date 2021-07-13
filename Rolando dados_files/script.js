
const quitPopup = document.getElementById('closelogo')
quitPopup.addEventListener('click',function(){

    const background = document.getElementById('logo-background')
    const container = document.getElementById('content')
    const body = document.getElementsByTagName('body')
    const backgroundAnimation = document.querySelector('.logo-image')

    body[0].classList.add('body-newcolor')
    container.classList.add('content--visible')
    backgroundAnimation.classList.add("logo--hidden")

    quitPopup.style.display ='none'
    setTimeout(function() {
        background.style.display = 'none'
        body[0].style.background = 'rgb(2, 54, 24)'
        container.style.opacity = '100%'

    },2000)
})
// Toda essa parte acima se trata do popup que inicia com o site, mostrando a logo do cassino
function rowDices() {
    dado1 = Math.floor(Math.random() * (7 - 1) + 1)
    dado2 = Math.floor (Math.random() * (7 - 1) + 1)
    return dado1+dado2
}

const spin1000 = document.getElementById('spin-button')
spin1000.addEventListener('click',function(){
    let results = [0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i < 1000; i++){
        let sort = rowDices()

        if(sort === 2){
            results[0]++
            continue
        }
        if(sort === 3){
            results[1]++
            continue
        }
        if(sort === 4){
            results[2]++
            continue
        }
        if(sort === 5){
            results[3]++
            continue
        }
        if(sort === 6){
            results[4]++
            continue
        }
        if(sort === 7){
            results[5]++
            continue
        }
        if(sort === 8){
            results[6]++
            continue
        }
        if(sort === 9){
            results[7]++
            continue
        }
        if(sort === 10){
            results[8]++
            continue
        }
        if(sort === 11){
            results[9]++
            continue
        }
        
        results[10]++
        
   }
   console.log(results)
   return results
})