const overlay = document.getElementById('overlayForm');

const toggleMenu = () => {
    document.querySelector('.toggle').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}
document.getElementById('toggle').addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);