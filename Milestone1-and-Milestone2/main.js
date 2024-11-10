var toggleBtn = document.getElementById("toggle");
var skilBtn = document.getElementById("skils");
toggleBtn.addEventListener('click', function () {
    if (skilBtn.style.display === 'none') {
        skilBtn.style.display = 'block';
    }
    else {
        skilBtn.style.display = 'none';
    }
});
