import MyComponent from '../shared/my-component.js';
import { ChannelsService } from '../services/channel.service.js';
import ChannelComponent from '../components/channel.component.js';

export default class ChannelListComponent extends MyComponent {
	template() {
		return `
        <div class="channel__list"></div>
        `;
	}
	constructor() {
        super();
    }
     getSortOption(sortId){
         this.sortId = sortId;
         return this.sortId;
     }

	async render(...args) {
        super.render(...args);

		const $fragment = document.createDocumentFragment();
        const allChannels = await ChannelsService.getChannels(this.sortId);

		allChannels.forEach(channel => {
			const item = new ChannelComponent();
			item.data = { channel };
			item.render($fragment);
		});
		this.$el.append($fragment);
    }
}
export const ChannelslListComponent = new ChannelListComponent();
