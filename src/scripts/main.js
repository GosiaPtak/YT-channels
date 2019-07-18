import AppComponent from '../components/app.component.js';

function main() {
    const $app = document.querySelector('#app');
    const app = new AppComponent();
    app.render($app);
}

window.addEventListener('DOMContentLoaded', main);
