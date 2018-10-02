
function init() {

	document.addEventListener('click', (event: MouseEvent) => {
		let item = <Element>event.target;
		if (item.classList.contains('dropdown-toggle')) {
			toggle(event, item.closest('.dropdown'), item);
		}
	});




}


function toggle(event: MouseEvent, container: Element | null, button: Element) {

	event.preventDefault();
	if (container) {
		let menus = container.getElementsByClassName('dropdown-menu');
		Array.from(menus).forEach((menu) => {
			if (!menu.classList.contains('show'))
				show(container, button, menu);
			else hide(container, button, menu);
		});
	}
}


function show(container: Element, button: Element, menu: Element) {
	button.classList.add('active');
	menu.classList.add('show');
	menu.setAttribute('tabindex', '-1');
	// menu.focus();
}

function hide(container: Element, button: Element, menu: Element) {
	button.classList.remove('active');
	menu.classList.remove('show');
	menu.removeAttribute('tabindex');
}



export default { init };