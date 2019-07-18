import MyComponent from '../shared/my-component.js';

export default class FilterComponent extends MyComponent {
	template() {
	return `
        <div class="filter">
            <input class="filter__input" type="text" placeholder="filter channels...">
        </div>
    `;
	}
}
