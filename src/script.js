const toggle = document.querySelector('.nav__toggle');
const root = getComputedStyle(document.documentElement);
const style = document.documentElement.style;
eventos()
function eventos(){
    window.addEventListener('load', () => localStorage.getItem('socialMedia') == 'dark' ? darkMode() : lightMode())
    toggle.addEventListener('click', e => {
        toggle.classList.contains('nav__toggle--active') ? darkMode() : lightMode();
    })
}


function darkMode() {
    toggle.classList.remove('nav__toggle--active')
    localStorage.setItem('socialMedia', 'dark')
    const colores = {
        '--gradiente-body': 'var(--dark-grad)',
        '--fondo-body': 'var(--dark-bg,',
        '--color': 'var(--dark-text)',
        '--color-dos': 'var(--dark-text-two)',
        '--fondo-card': 'var(--dark-cards)',
        '--toggle': 'var(--dark-toggle)',
        '--hover': 'var(--dark-hover)',
        '--brillo': '125%',
    }

    Object.entries(colores).forEach( item => {
        style.setProperty(item[0], item[1])
    })

}

function lightMode() {
    toggle.classList.add('nav__toggle--active')
    localStorage.setItem('socialMedia', 'light')
    const colores = {
        '--gradiente-body': 'var(--light-grad)',
        '--fondo-body': 'var(--light-bg,',
        '--color': 'var(--light-text)',
        '--color-dos': 'var(--light-text-two)',
        '--fondo-card': 'var(--light-cards)',
        '--toggle': 'var(--light-toggle)',
        '--hover': 'var(--light-hover)',
        '--brillo': '110%',
    }

    Object.entries(colores).forEach(item => style.setProperty(item[0], item[1]))

}
