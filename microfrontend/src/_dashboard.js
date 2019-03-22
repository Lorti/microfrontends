import template from '../views/_dashboard.hbs';

export default function (button, container, context) {
    let visible = false;
    let notifications = false;

    function showDashboard() {
        const vm = {
            NAMESPACE: process.env.NAMESPACE,
            notifications
        };
        container.innerHTML = template(Object.assign({}, context, vm));
        window.addEventListener('click', toggleDashboard);
        container.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }

    function hideDashboard() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        window.removeEventListener('click', toggleDashboard);
    }

    function toggleDashboard(e) {
        e.stopPropagation();
        visible = !visible;

        if (visible) {
            showDashboard();
        } else {
            hideDashboard();
        }
    }

    function updateListener(e) {
        notifications = e.detail.notifications;
        if (visible) {
            showDashboard();
        }
    }

    button.addEventListener('click', toggleDashboard);
    window.addEventListener(`${process.env.NAMESPACE}:update-notifications`, updateListener);
}
