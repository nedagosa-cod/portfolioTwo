const toggleMenu = () => {

        // document.getElementById("myNav").style.height = "100%";
        document.querySelector('.toggle').classList.toggle('active');
        document.querySelector('.overlay').classList.toggle('active');

}




const closeMenu = () => {
    document.getElementById("myNav").style.height = "0%";
}
document.getElementById('toggle').addEventListener('click', toggleMenu);