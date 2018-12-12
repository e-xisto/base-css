
let activeDropdown: any = {};


function init() {

	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;
		let target;

		if (item.getAttribute('data-action') == 'collapse') {
			event.preventDefault();
			event.stopPropagation();

			let targetName = item.getAttribute('data-target');
			if (targetName) target = document.getElementById(targetName);
			if (target) toggle(target, item);
		}
	});

}

function toggle(target: Element, button: Element) {

	let parent: Element;
	let idParent = target.getAttribute('data-parent');
	if (idParent) {
		parent = <Element>document.getElementById(idParent);
		if (parent) {
			let others = parent.querySelectorAll(`[data-parent="${idParent}"]:not(#${target.id})`);
			others.forEach((e: Element) => {
				hide(parent, e);
			});
		}
	}

	let shown = target.classList.toggle('show');
	button.classList.toggle('active', shown);


}

function hide(parent: Element, target: Element) {

	let button = getButton(parent, target);
	if (button) button.classList.remove('active');
	target.classList.remove('show');
}


function getButton(parent: Element, target: Element): Element | null {
	let button = parent.querySelector(`[data-action="collapse"][data-target="${target.id}"]`);
	return button;
}



export default { init };