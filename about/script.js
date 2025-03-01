function fadeOut(event) {
    event.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 500);
}

function fadeIn() {
    document.body.style.opacity = '1';
}
