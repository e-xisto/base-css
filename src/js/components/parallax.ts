import { jarallax, jarallaxElement, jarallaxVideo } from 'jarallax';

function init() {
	jarallax(document.querySelectorAll('.parallax'), {
		imgElement: '.parallax-img'
	});
}

export default { init };
