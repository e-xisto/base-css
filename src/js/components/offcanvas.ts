
function init() {

	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;

		if (item.getAttribute('data-action') == 'offcanvas') {
			event.preventDefault();
			event.stopPropagation();

			toggle(item.getAttribute('data-target'), item);
		}
	});

}


function toggle(id: string | null, button: Element) {

	if (id) {
		let offcanvas = document.getElementById(id);
		if (!offcanvas) return;
		offcanvas.classList.toggle('show');
		offcanvas.classList.forEach((clase: string) => {

			if (clase.startsWith('offcanvas-push-')) {
				let wrap = document.getElementsByClassName('offcanvas-wrap')[0];
				wrap.classList.toggle(clase.replace('push', 'wrap'));
				if (wrap.classList.contains('offcanvas-wrap-noscroll')) {
					backdrop();
				}
				return;
			}
		});
	}
}

function backdrop() {
	let velos = document.getElementsByClassName('offcanvas-backdrop');
	if (velos.length) {
		document.body.removeChild(velos[0]);
	} else {
		let elem = document.createElement('div');
		elem.classList.add('offcanvas-backdrop');
		document.body.appendChild(elem);
	}
	document.body.classList.toggle('noscroll');
}


export default { init };