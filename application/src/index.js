import('./_notifications').then(({ default: toggleNotifications }) => {
    const button = document.querySelector('.js-notifications');
    button.addEventListener('click', toggleNotifications);
});
