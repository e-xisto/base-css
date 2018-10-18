
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

	if (!id) return;
	let offcanvas = <HTMLElement>document.getElementById(id);
	if (!offcanvas) return;

	let shown = offcanvas.classList.toggle('show');
	offcanvas.classList.forEach((clase: string) => {

		if (clase.startsWith('offcanvas-push-')) {

			let wrap = <HTMLElement>document.getElementsByClassName('offcanvas-wrap')[0];
			if (wrap) {
				let transform = '';
				if (shown) {
					if (clase.endsWith('-right')) transform = `translateX(-${offcanvas.offsetWidth}px)`;
					if (clase.endsWith('-left')) transform = `translateX(${offcanvas.offsetWidth}px)`;
					if (clase.endsWith('-top')) transform = `translateY(${offcanvas.offsetHeight}px)`;
					if (clase.endsWith('-bottom')) transform = `translateY(-${offcanvas.offsetHeight}px)`;
				}
				wrap.style.transform = transform;

				wrap.classList.toggle(clase.replace('push', 'wrap'));
				if (wrap.classList.contains('offcanvas-wrap-noscroll')) {
					backdrop();
				}
				return;
			}
		}
	});
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