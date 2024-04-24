const lists = document.querySelectorAll('.list_items li')

lists.forEach((elem,index)=>{
    elem.addEventListener('click',()=>{
        if(index===0){
            elem.classList.add('active')
            lists[1].classList.remove('active')
            lists[2].classList.remove('active')
        }else if(index===1){
            elem.classList.add('active')
            lists[0].classList.remove('active')
            lists[2].classList.remove('active')
        }else if(index===2){
            elem.classList.add('active')
            lists[0].classList.remove('active')
            lists[1].classList.remove('active')
        }
        
    })
})








