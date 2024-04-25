const emoji = document.querySelectorAll('.emoji');
const divs = document.querySelectorAll('.divs');


emoji.forEach((elem,index)=>{
    elem.addEventListener('click',(e)=>{
        const computedStyle = window.getComputedStyle(e.target);
        const color = computedStyle.color;
        console.log(color);
        divs.forEach((elem, index)=>{
            elem.addEventListener('click',(event)=>{
                console.log(event.target.style.backgrounColor);
                event.target.style.backgroundColor = color;
            })
        })
    })
})


