const button = document.getElementById('toggleStyle');

function applySavedStyle() {
    if (localStorage.getItem('alt') === 'true') {
        document.body.classList.add('alt');
    } else {
        document.body.classList.remove('alt');
    }
}

function toggleStyle() {
    document.body.classList.toggle('alt');

    const isAltMode = document.body.classList.contains('alt');
    localStorage.setItem('alt', isAltMode);
}

if (button) {
    button.addEventListener('click', toggleStyle);
}

// Apply saved style immediately on page load
applySavedStyle();
