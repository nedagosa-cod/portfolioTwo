const toggleMenu = () => {
    document.querySelector('.toggle').classList.toggle('active');
}

document.getElementById('toggle').addEventListener('click', toggleMenu);