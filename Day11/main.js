const inp = document.querySelector('.inp input')
const close_btn =  document.querySelector('span')

inp.addEventListener('focus', function(e) {
    close_btn.style.display = 'block';
});
inp.addEventListener('blur', function() {
    close_btn.style.display = 'block';
    setTimeout(()=>{
        close_btn.style.display = 'none';
    },200)
})
close_btn.addEventListener('click',()=>{
    inp.value = '';
})

