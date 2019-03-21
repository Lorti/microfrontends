const button = document.querySelector('.mf-header__button');

if (button) {
    const container = document.querySelector('.mf-header__menu');
    const context = window.__MF__;
    import(/* webpackChunkName: "dashboard" */ './dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });

    window.addEventListener('mf-header:update-notifications', (e) => {
        if (e.detail.notifications) {
            button.classList.add('mf-header__button--notification');
        } else {
            button.classList.remove('mf-header__button--notification');
        }
    });
}
