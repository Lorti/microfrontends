const context = window[process.env.CONTEXT];

const button = document.querySelector(`.${process.env.NAMESPACE}-header__button`);
const container = document.querySelector(`.${process.env.NAMESPACE}-header__menu`);

if (button) {
    import('./_dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });
    window.addEventListener(`${process.env.NAMESPACE}:update-notifications`, () => {
        button.classList.toggle(`${process.env.NAMESPACE}-header__button--notification`);
    });
}
