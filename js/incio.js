const title = document.querySelector('.titulo');


title.addEventListener('mouseover', (e) => {
    if(e.target == title){
        title.classList.add('animate__animated', 'animate__pulse');
    }
})

window.addEventListener('mousemove', e=>{
    if(title.classList.contains('animate__animated', 'animate__pulse') && e.target !== title){
        title.classList.remove('animate__animated', 'animate__pulse')

    }
} )
