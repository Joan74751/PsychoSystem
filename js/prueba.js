const ver = document.querySelector('.card');

ver.addEventListener('mouseover', (f) => {
    if(f.target == ver){
        ver.classList.remove('.show');
    }
})