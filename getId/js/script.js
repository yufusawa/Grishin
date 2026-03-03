//ПЕРВАЯ ЗАДАЧА

const button = document.getElementById('button1')
const p = document.getElementById('p1')

button.addEventListener('click', changetext)

function changetext(){
    p.textContent='Текст изменен'
}

//ВТОРАЯ ЗАДАЧА

const hoverDiv = document.getElementById('hoverDiv')

hoverDiv.addEventListener('mouseenter', changebg)
hoverDiv.addEventListener('mouseleave', deletebg)
function changebg(){
    hoverDiv.classList.add('highlight');
}
function deletebg(){
    hoverDiv.classList.remove('highlight');
}

//ТРЕТЬЯ ЗАДАЧА


const btnDivToggle = document.getElementById('btnDivToggle')
const divToggle = document.getElementById('divToggle')

btnDivToggle.addEventListener('click', hideDiv)

function hideDiv(){
    divToggle.classList.toggle('hide')
}

//ЧЕТВЕРТАЯ ЗАДАЧА

const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')

const btnBgRed = document.getElementById('btnBgRed')
const btnFontLarge = document.getElementById('btnFontLarge')
const btnBorder = document.getElementById('btnBorder')

btnBgRed.addEventListener('click', btnBgRedFunc)
btnFontLarge.addEventListener('click', btnFontLargeFunc)
btnBorder.addEventListener('click', btnBorderFunc)

function btnBgRedFunc(){
    block1.classList.toggle('redBg')
}
function btnFontLargeFunc(){
    block2.classList.toggle('largeFont')
}
function btnBorderFunc(){
    block3.classList.toggle('addBorder')
}




//ПЯТАЯ ЗАДАЧА

// const newItemInput = document.getElementById('newItemInput')
// const addBtn = document.getElementById('addBtn')
// const itemList = document.getElementById('itemList')

// function getInput() {
    
// }