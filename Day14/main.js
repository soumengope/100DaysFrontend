const myDiv = document.querySelectorAll('.myDiv')
const element = document.querySelector('.element')

element.addEventListener('dragstart',dragStart)
element.addEventListener('dragend',dragEnd)

function dragStart(){
    this.classList.add('hold');
    setTimeout(()=>
    {
        this.className = 'invisible'
    },0)
}
function dragEnd(){
    this.className = 'element'
}

myDiv.forEach((empty)=>{
    empty.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
    empty.addEventListener('dragenter',(e)=>{
        this.className += 'hovered'
    })
    empty.addEventListener('dragleave',(e)=>{
        this.className = 'element'
    })
    empty.addEventListener('drop',(e)=>{
        empty.append(element)
        this.className = 'element'
        
    })
    
})







