import HeaderComponent from '../components/header.component.js';
import SortComponent from '../components/sort.component.js';
import FilterComponent from '../components/filter.component.js';
import { ChannelslListComponent } from '../components/channel-list.component.js';
import MyComponent from '../shared/my-component.js';

export default class AppComponent extends MyComponent {
	template() {
		return `
        <div class="wrapper">
            <header class="wrapper__header"></header>
            <main class="wrapper__main js-content">
            </main>
            <div class="wrapper__filter"></div>
            <aside class="wrapper__aside"></aside>
        </div>`;
	}

	render(...args) {
		super.render(...args);

		const header = new HeaderComponent();
        header.render(this.$el.querySelector('.wrapper__header'));

		ChannelslListComponent.render(this.$el.querySelector('.wrapper__main'));

		const sort = new SortComponent();
		sort.render(this.$el.querySelector('.wrapper__aside'));

		const filter = new FilterComponent();
		filter.render(this.$el.querySelector('.wrapper__filter'));
	}
}