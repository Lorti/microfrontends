let notifications = false;

export default function() {
    notifications = !notifications;
    const event = new CustomEvent('microfrontend:update-notifications', {
        detail: {
            notifications
        }
    });
    window.dispatchEvent(event);
}
