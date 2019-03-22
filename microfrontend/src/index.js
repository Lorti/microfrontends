// Fetch the view model from the global context (to prevent an additional request). -->
const context = window[process.env.CONTEXT];

// All HTML classes and CSS selectors are namespaced, therefore no styles leak into the parent application.
const button = document.querySelector(`.${process.env.NAMESPACE}-header__button`);
const container = document.querySelector(`.${process.env.NAMESPACE}-header__menu`);

if (button) {
    import('./_dashboard').then(({ default: dashboard }) => {
        dashboard(button, container, context);
    });

    // All events are global and namespaced, therfore anyone can send an event with `new CustomEvent()`.
    window.addEventListener(`${process.env.NAMESPACE}:update-notifications`, () => {
        button.classList.toggle(`${process.env.NAMESPACE}-header__button--notification`);
    });
}
