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
	}
}

function hide(item: Element, target: string | null) {

	if (target) {
		let element = document.getElementById(target);
		if (element) element.classList.remove('show');
	} else {
		let parent = item.closest('.modal');
		if (parent) parent.classList.remove('show');
	}
}

export default { init };
