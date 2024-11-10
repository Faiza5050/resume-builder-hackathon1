const toggleBtn = document.getElementById("toggle") as HTMLButtonElement;
const skilBtn = document.getElementById("skils") as HTMLElement;

toggleBtn.addEventListener('click', () => {
    if(skilBtn.style.display === 'none') {
        skilBtn.style.display = 'block'
    } else {
        skilBtn.style.display = 'none'
    }
})

