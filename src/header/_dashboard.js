import template from '../../views/header/_dashboard.hbs';

export default function (button, container, context) {
    let visible = false;
    let notifications = {};

    function showDashboard() {
        container.innerHTML = template(Object.assign({}, context, notifications));
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
        notifications = e.detail;
        if (visible) {
            showDashboard();
        }
    }

    button.addEventListener('click', toggleDashboard);
    window.addEventListener('mf-header:update-notifications', updateListener);
}
