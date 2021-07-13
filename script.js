
const quitPopup = document.getElementById('closelogo')
const background = document.getElementById('logo-background')
quitPopup.addEventListener('click',function(){
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