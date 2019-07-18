import MyComponent from '../shared/my-component.js';

export default class HeaderComponent extends MyComponent {
	template() {
		return `
        <h1 class="header"><span class="header__js-logo">JS</span> Channels</h1>
        `;
	}
}