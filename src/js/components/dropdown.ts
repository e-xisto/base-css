
function init() {


	document.addEventListener('click', (event: Event) => {
		let item = <Element>event.target;
		if (item.classList.contains('dropdown-toggle')) {
			event.preventDefault();
			event.stopPropagation();
			toggle(item.closest('.dropdown'), item);
		}
	});

}


function toggle(container: Element | null, button: Element) {

	if (container) {
		let menus = container.getElementsByClassName('dropdown-menu');
		Array.from(menus).forEach((menu) => {
			if (menu.classList.contains('show')) hide(container, button, menu);
			else show(container, button, menu);
		});
	}
}


function show(container: Element, button: Element, menu: Element) {

	button.classList.add('active');
	menu.classList.add('show');

	container.setAttribute('tabindex', '-1');
	(<HTMLElement>container).focus();
	container.addEventListener('blur', menuBlurEventHandler);
}


function hide(container: Element, button: Element, menu: Element) {

	button.classList.remove('active');
	menu.classList.remove('show');

	container.removeAttribute('tabindex');
	container.removeEventListener('blur', menuBlurEventHandler);
}


function menuBlurEventHandler(event: Event) {

	let container = <Element>event.target;
	container.removeAttribute('tabindex');
console.log('blur');
	let menus = container.getElementsByClassName('dropdown-menu');
	Array.from(menus).forEach((menu) => {
		menu.classList.remove('show');
	});

	let toggles = container.getElementsByClassName('dropdown-toggle');
	Array.from(toggles).forEach((toggle) => {
		toggle.classList.remove('active');
	});
}



export default { init };