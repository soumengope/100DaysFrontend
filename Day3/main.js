const res1 = document.querySelector('#res1')
const res2 = document.querySelector('#res2')
const inp = document.querySelector('#inp')

inp.addEventListener('input',(event)=>{
    res1.innerText = `Input is : ${event.target.value}`;
    res2.innerText = `Input Count is : ${event.target.value.length}`
})