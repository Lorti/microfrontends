let notifications = false;

export default function() {
    notifications = !notifications;
    const event = new CustomEvent('mf-header:update-notifications', {
        detail: {
            notifications
        }
    });
    window.dispatchEvent(event);
}
