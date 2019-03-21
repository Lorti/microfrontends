import template from './dashboard.hbs';

export default function(button, container, context) {
  let visible = false;

  function toggleDashboard(e) {
    e.stopPropagation();
    visible = !visible;

    if (visible) {
      container.innerHTML = template(context);
      window.addEventListener('click', toggleDashboard);
      container.addEventListener('click', (e) => {
        e.stopPropagation();
      })
    } else {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      window.removeEventListener('click', toggleDashboard);
    }
  }
  function updateListener(e) {
    // TODO
    console.log(e.detail)
  }

  button.addEventListener('click', toggleDashboard);
  window.addEventListener('mf-header:update-dashboard', updateListener);
}
