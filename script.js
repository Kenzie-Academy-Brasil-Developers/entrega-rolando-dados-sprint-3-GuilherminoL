
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
        body[0].style.background = 'rgb(2, 54, 24)'
        container.style.opacity = '100%'

    },3000)

    setTimeout(function() {
        background.style.display = 'none'
    },2000)
})


function rowDices() {
    dado1 = Math.floor(Math.random() * (7 - 1) + 1)
    dado2 = Math.floor (Math.random() * (7 - 1) + 1)
    return dado1+dado2
}

const spin1000 = document.getElementById('spin-button')
spin1000.addEventListener('click',function (){
    const graph = document.getElementById('graph')
    graph.innerHTML = ''
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
            results[5]++// here we use IIFE to make the loop for wait thr setTimeout delay
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
    let max = Math.max(...results)
    graph.classList.remove('hidden')
    let j = 0;
    window.scrollTo(0,document.body.scrollHeight)
    for(let i = 0; i < results.length; i++) {
        setTimeout(function(i) {                        // here we use IIFE to make the loop for wait thr setTimeout delay
        const newElement = document.createElement('div')  
        newElement.classList.add('graphic-bar')
        newElement.innerText = j + 2
        const percent = document.createElement('p')
        percent.innerText = (results[j]/10) + '%'
        percent.classList.add('graphic-percentage') 
        let alturaDiv =(results[j]* 90)/max
        console.log(alturaDiv)
        document.documentElement.style.setProperty('--my-finish-height', alturaDiv+'%')
        newElement.style.height =  alturaDiv+'%' 
        newElement.appendChild(percent)
        j++
        graph.appendChild(newElement)
    },3000*i) 
}
})

