const context = window.__MF__;

const button = document.querySelector('.microfrontend-header__button');
const container = document.querySelector('.microfrontend-header__menu');

if (button) {
    import('./_dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });
    window.addEventListener('microfrontend:update-notifications', () => {
        button.classList.toggle('microfrontend-header__button--notification');
    });
}
