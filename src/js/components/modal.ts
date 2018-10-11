function init() {
	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;
		let action = item.getAttribute('data-action');
		let target = item.getAttribute('data-target');
		if (action == 'modal-open' && target) {
			event.preventDefault();
			event.stopPropagation();

			show(target);
		}
		if (action == 'modal-close') {
			event.preventDefault();
			event.stopPropagation();

			hide(item, target);
		}
	});
}

function show(target: string) {

	let element = document.getElementById(target);
	if (element) {
		element.classList.add('show');
		document.body.classList.add('noscroll');
	}
}

function hide(item: Element, target: string | null) {

	let element: Element | HTMLElement | null;
	if (target) element = document.getElementById(target);
	else element = item.closest('.modal');

	if (element) {
		element.classList.remove('show');
		document.body.classList.remove('noscroll');
	}
}

export default { init };
