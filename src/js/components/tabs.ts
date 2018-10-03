function init() {
	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;

		if (item.classList.contains('tabs-item')) {
			event.preventDefault();
			event.stopPropagation();

			show(item);
		}
	});
}

function show(tab: Element) {

	let id = <string>tab.getAttribute('href');
	if (id.startsWith('#')) id = id.substr(1,id.length - 1);

	let panel = <Element>document.getElementById(id);
	if (!panel.classList.contains('show')) {

		let container = panel.closest('.tabs-content');
		if (container) {
			let allTabs = <HTMLCollectionOf<Element>>container.getElementsByClassName('tabs-panel');
			Array.from(allTabs).forEach((item: Element) => {
				item.classList.remove('show');
			});
		}
		panel.classList.add('show');
	}
}

export default { init };
