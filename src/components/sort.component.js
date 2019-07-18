import MyComponent from '../shared/my-component.js';
import { ChannelslListComponent } from '../components/channel-list.component.js';

export default class SortComponent extends MyComponent {
	template() {
		return `
            <div class="sort">
                <h3 class="sort__header">Sort channels by:</h3>
                <ul class="sort__options">
                    <li>
                        <input class="choice choice--radio" name="sort" type="radio" id="sort-title">
                        <label class="choice__label" for="sort-title">title</label>
                    </li>
                    <li>
                        <input class="choice choice--radio" name="sort" type="radio" id="sort-subscribers">
                        <label class="choice__label" for="sort-subscribers">subscribers</label>
                    </li>
                    <li>
                        <input class="choice choice--radio" name="sort" type="radio" id="sort-videos">
                        <label class="choice__label" for="sort-videos">videos</label>
                    </li>
                    <li>
                        <input class="choice choice--radio" name="sort" type="radio" id="sort-views">
                        <label class="choice__label" for="sort-views">views</label>
                    </li>
                </ul>
                <button class="button">Clear</button>
            </div>`;
    }
    render(...args) {
        super.render(...args);
        let eventId = EventTarget;
        document.addEventListener(
            'click',
            function(event) {
                if (
                    event.target.matches('.choice--radio')
                ) {
                    ChannelslListComponent.getSortOption(event.target.id);
                }
            },
            false
        );
    }
}
