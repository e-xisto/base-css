
let dotdotdot = new Array<HTMLElement>();

function init() {
	let elements = Array.from(document.getElementsByClassName('dotdotdot'));
	for (let element of elements) {
		dotdotdot.push(<HTMLElement>element);
	}

	// document.addEventListener('resize', cutElements);
	cutElements();
}

function cutElements() {
	for (let element of dotdotdot) {
		if (element.getAttribute('data-dotlines')) {
			cutLines(element, Number(element.getAttribute('data-dotlines')));
		}
		if (element.getAttribute('data-dotheight')) {
			cutHeight(element, Number(element.getAttribute('data-dotheight')));
		}
	}
}

function cutHeight(element: HTMLElement, pixels: number) {

	if (isNaN(pixels)) return;
	let fontSize = Number(window.getComputedStyle(element).fontSize) || 24;
	let lineHeight = Number(window.getComputedStyle(element).lineHeight) || 1;

	let lines = Math.floor(pixels / (fontSize * lineHeight)) || 1;
	let height = lines * (fontSize * lineHeight);
	let actualHeight = parseInt(window.getComputedStyle(element).height || '');
	if (actualHeight >= height) {
		element.style.height = height + 'px';
		(<any>element.style)['-webkit-line-clamp'] = lines;
	}
}


function cutLines(element: HTMLElement, lines: number) {

	let fontSize = Number(window.getComputedStyle(element).fontSize) || 24;
	let lineHeight = Number(window.getComputedStyle(element).lineHeight) || 1;

	let height = lines * (fontSize * lineHeight);
	let actualHeight = parseInt(window.getComputedStyle(element).height || '');

	if (actualHeight >= height) {
		element.style.height = height + 'px';
		(<any>element.style)['-webkit-line-clamp'] = lines;
	}
}


export default { init };
