const onlChk = document.querySelector('span')

window.onload = ()=>{
    if(window.navigator.onLine){
        onlChk.innerText=`Online`;
        onlChk.classList.add('green')
    }else{
        onlChk.innerText=`Ofline`;
        onlChk.classList.add('red')
    }
}