function fadeOut(event) {
    event.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 500);
}

function fadeIn() {
if (!sessionStorage.getItem("visited")) {
document.body.style.opacity = '0';
requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});
sessionStorage.setItem("visited", "true");
} else {
document.body.style.opacity = '1';
}
}

window.addEventListener("pageshow", fadeIn);