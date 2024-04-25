const display = document.querySelector('.display')
const inp = document.querySelectorAll('.bot_div')
let inp_store = '';

inp.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        let drive = e.target.innerText;
        if(drive=='CL' || drive=='C' || drive=='='){
            switch(drive){
                case 'CL':
                    inp_store = ''
                    display.innerText = inp_store;
                    break;
                case 'C':
                    inp_store = inp_store.slice(0, -1);
                    display.innerText = inp_store;
                    break;
                case '=':
                    try{
                        let res = eval(inp_store)
                        display.innerText = res;
                        inp_store = res;
                        break;
                    }catch(err){
                        display.innerText = "Please enter valid equation";
                    }
            }
        }else{
            inp_store = inp_store + e.target.innerText;
            display.innerText = inp_store;
        }
    })
})







