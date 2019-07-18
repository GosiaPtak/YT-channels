import MyComponent from '../shared/my-component.js';

export default class ChannelComponent extends MyComponent {
	template = ({ channel }) => {
        return `
        <div class="channel__card">
            <img src="${channel.thumbnails.medium.url}" alt="...">
            <div>
                <h2>${channel.title}</h2>
            </div>
            <div class="channel__card--details">
                <h5>SUBSCRIBERS:</h5>
                <h5>
                    ${new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(channel.statistics.subscriberCount)}
                </h5>
            </div>
            <div class="channel__card--details">
                <h5>VIDEOS:</h5>
                <h5>
                    ${new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(channel.statistics.videoCount)}
                </h5>
            </div>
            <div class="channel__card--details">
                <h5>VIEWS:</h5>
                <h5>
                    ${new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(channel.statistics.viewCount)}
                </h5>
            </div>
        </div>
        `;
	};
}
