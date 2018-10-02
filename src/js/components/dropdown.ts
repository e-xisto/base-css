
class Dropdown {
	
	items: HTMLCollection;

	constructor(){

		this.items = document.getElementsByClassName('dropdown');
	}

	init() {

		for (var i = 0; this.items.length; i++) {
			let item = this.items.item(i);
			item.setAttribute('tabindex', '0');
			item.addEventListener('blur', (event) => {

			});
		}
		

	}
}


export default new Dropdown();