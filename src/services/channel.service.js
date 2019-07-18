class ChannelService {
    constructor( ){
        const channels = new Response();
    }
    async makeRequest(param) {
        const url = `../src/assets/channels.json`;
        const response = await fetch(url);
        this.channels = await response.json();
        return this.channels;
    }
    async getChannels (param) {
        return this.makeRequest(param);
    }
}
export const ChannelsService = new ChannelService();