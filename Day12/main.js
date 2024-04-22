// const sec = document.querySelectorAll('section')

// const options = {
//     root:null,
//     threshold:0.25,
//     rootMargin:"0px"
// }

// const observer = new IntersectionObserver(function(entries,observer){
//     entries.forEach((elem)=>{
//         if(!elem.isIntersecting){
//             elem.target.classList.remove('show_anim')
//             return
//         }
//         elem.target.classList.add('show_anim')
//         console.log(elem.target);
//     })
// },options)
 
// sec.forEach((e)=>{
//     observer.observe(e)
// })


////////////////////////////////////////////////////////////////////////

const api = 'data.json'
const myApi = async()=>{
   const response = await fetch(api);
   const data = await response.json();
   data.map((elem)=>{
      crtElem(elem.icon,elem.category,elem.score)
   })
}
myApi()

const summary_lists = document.querySelector('.summary_lists')
const crtElem = (simg,sname,sp)=>{
   const s_main = document.createElement('div')
   s_main.classList.add('s_main')
   const s1 = document.createElement('div')
   s1.classList.add('s1')
   const s2 = document.createElement('div')
   s2.classList.add('s2')
   const img = document.createElement('img')
   img.src = simg
   const name = document.createElement('h4')
   name.innerText = sname
   const p = document.createElement('p')
   p.innerText = `${sp} / 100`
   summary_lists.append(s_main)
   s_main.append(s1,s2)
   s1.append(img,name)
   s2.append(p)
}




