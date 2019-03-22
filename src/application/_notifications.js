let notifications = false;

export default function() {
    notifications = !notifications;
    const event = new CustomEvent('mf:update-notifications', {
        detail: {
            notifications
        }
    });
    window.dispatchEvent(event);
}
