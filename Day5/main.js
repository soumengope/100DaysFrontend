const target = document.querySelectorAll('.obs')

const options = {
    root:null, //it is viewport
    threshold:0,
    rootMargin:"0px"
};

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach((elem)=>{
        if(!elem.isIntersecting){
            elem.target.classList.remove('anim')
            return
        }
        elem.target.classList.add('anim')
    })
},options)

target.forEach((elem)=>{
    observer.observe(elem)
})
