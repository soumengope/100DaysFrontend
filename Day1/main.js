const rangeVal = document.querySelector('.rangeVal')
const rangeVal_show = document.querySelector('.rangeVal_show')
const passGenBtn = document.querySelector('.passGenBtn')
const showPass = document.querySelector('.showPass h5')

rangeVal.addEventListener('input',(event)=>{
    rangeVal_show.innerText = event.target.value;
    passGenBtn.addEventListener('click',()=>{
        getPass(rangeVal_show.innerText)
    })
})

const getPass = (max)=>{
    
    let passStr = '';
    for(let i=0; i<max; i++){
        let getRand = Math.floor(Math.random() * 9);
        passStr = passStr + getRand;
    }
    showPass.innerText=`Random Password is : ${passStr}`;
}