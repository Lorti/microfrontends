const button = document.querySelector('.header__button');

if (button) {
    const container = document.querySelector('.header__menu');
    const context = {
        username: document.querySelector('[href="/profile"]').textContent,
    };
    import(/* webpackChunkName: "dashboard" */ './dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });
}
