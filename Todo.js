
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#form3')
const input = document.querySelector('#input')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const section = document.querySelector('#finalList')
const ol = document.querySelector('.list')
const storeMe = []

form1.addEventListener('submit' , function(e){
    e.preventDefault();
    input.disabled = false
    button2.disabled = false
    
})

form2.addEventListener('submit' , function(e){
    e.preventDefault();
    const list = document.createElement('li')
    list.classList.add('lists')
    list.textContent = `${input.value} has been added as your Task`
    ol.appendChild(list)
    storeMe.push(list)
    input.value = ''
})

form3.addEventListener('submit' , function(e){
    e.preventDefault();
    input.disabled = true
    button2.disabled = true

})

ol.addEventListener('click' , function(e){
    e.target.remove()
})
