const context = window.__MF__;

const button = document.querySelector('.mf-header__button');
const container = document.querySelector('.mf-header__menu');

if (button) {
    import('./_dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });
    window.addEventListener('mf:update-notifications', () => {
        button.classList.toggle('mf-header__button--notification');
    });
}
