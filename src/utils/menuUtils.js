export const toggleMenu = () => {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active');
    } 
}
