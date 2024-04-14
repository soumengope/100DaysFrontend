document.querySelectorAll('.main_nav a').forEach((e)=>{
    e.addEventListener('click',(elem)=>{
        elem.preventDefault();
        const hrf = elem.target.getAttribute('href')
        const div = document.querySelector(hrf);

        if(div){
            div.scrollIntoView({behavior:'smooth'})
        }
    })
})


