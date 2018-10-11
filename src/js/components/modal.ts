
let modalActive = new Array<Element>();

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

			hide(target);
		}
	});

	document.addEventListener('keyup', (event: KeyboardEvent) => {
		if (event.key == 'Escape') {
			hide();
		}
	});
}

function show(target: string) {
	let element = document.getElementById(target);
	if (element) {
		element.classList.add('show');
		element.scrollTop = 0;
		modalActive.push(element);
		document.body.classList.add('noscroll');
	}
}

function hide(target?: string | null) {

	let element: Element | null | undefined;
	if (target) {
		element = document.getElementById(target);
		let index;
		if (element) index = modalActive.indexOf(element);
		if (index !== undefined) {
			modalActive.splice(index, 1);
		}
	} else
		element = modalActive.pop();

	if (element) {
		element.classList.remove('show');
		document.body.classList.remove('noscroll');
	}
}

export default { init };
