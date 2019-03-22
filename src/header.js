const context = window.__MF__;

const button = document.querySelector('.mf-header__button');
const container = document.querySelector('.mf-header__menu');

if (button) {
    import('./dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });
    window.addEventListener('mf-header:update-notifications', () => {
        button.classList.toggle('mf-header__button--notification');
    });
}
