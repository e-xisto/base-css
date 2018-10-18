
let modalActive = new Array<HTMLElement>();

function init() {
	document.addEventListener('click', (event: Event) => {

		let item = <HTMLElement>event.target;
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

		if (item.classList.contains('modal') && item.classList.contains('show') && !item.classList.contains('noclick')) {
			event.preventDefault();
			event.stopPropagation();
			hide();
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
		let index = modalActive.push(element) - 1;
		if (index > 0) {
			let zIndex = parseInt(modalActive[index - 1].style.zIndex || '0') + 1000;
			element.style.zIndex = zIndex.toString();
		} else {
			if (!element.style.zIndex) element.style.zIndex = '1000';
		}

		document.body.classList.add('noscroll');
	}
}

function hide(target?: string | null) {

	let element: HTMLElement | null | undefined;
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