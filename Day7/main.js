const opening = document.querySelector('.opening')
const closing = document.querySelector('.closing')
const navlist = document.querySelector('.main_nav')
const main = document.querySelector('.main')

function abc(){
    opening.onclick = ()=>{
        closing.style.display = 'block'
        opening.style.display = 'none'
        navlist.style.display = 'block'
        main.style.position = 'fixed'
        main.style.backgroundColor = 'white'
        main.style.inset = '0 0 0 0%'
        main.style.animation = 'insetAlim 500ms linear forwards'
        navlist.style.animation = 'aAlim 600ms linear forwards'
    }

    closing.onclick = ()=>{
        closing.style.display = 'none'
        opening.style.display = 'block'
        navlist.style.display = 'none'
        main.style.inset = 'unset'
        main.style.backgroundColor = 'white'
        main.style.animation = 'RinsetAlim 500ms linear'
        navlist.style.animation = 'RaAlim 600ms linear'
        setTimeout(()=>{
            main.style.position = 'unset'
        },500)
    }
}

abc()