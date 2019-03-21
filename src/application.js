const button = document.querySelector('.js-notifications');
let notifications = false;

button.addEventListener('click', () => {
    notifications = !notifications;
    const event = new CustomEvent('mf-header:update-notifications', {
        detail: {
            notifications
        }
    });
    window.dispatchEvent(event);
});
