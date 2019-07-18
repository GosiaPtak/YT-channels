export default class MyComponent {
	constructor() {
		this.data = {};
	}
	template(data) {
		return ' ';
	}
	compile() {
		const parser = new DOMParser();
		const doc = parser.parseFromString(this.template(this.data), 'text/html');
		this.$el = doc.body.firstElementChild;
	}
	render($target) {
		this.compile();
		if ($target) {
			$target.append(this.$el);
		}
	}
}
