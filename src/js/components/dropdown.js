function Dropdown () {

	var dropdowns = document.querySelectorAll(".dropdown"),
		activeClass = 'active';

	function getImmediateChildElement(contextEl, toFindEl) {
		var allChildLists = contextEl.querySelectorAll(toFindEl);
		if(allChildLists.length === 0) {
			return;
	}
	
	return allChildLists[0];
	}

	function addClass(element, classToAdd) {
		element.className = element.className + ' ' + classToAdd;
	}

	function removeClass(element, classToRemove) {
		var cssClasses = element.className.split(" ");
		for(var i = 0; i < cssClasses.length; i++) {
			if(cssClasses[i].trim() === classToRemove) {
			cssClasses.splice(i, 1);
			element.className = cssClasses.join(" ");
			return;
			}
		}
	}

	function showDropdown(e) {
		var immediateChildList = getImmediateChildElement(e.target, "ul");
		addClass(e.target, activeClass);
	}

	function hideDropdown(e) {
		var immediateChildList = getImmediateChildElement(e.target, "ul");
		removeClass(e.target, activeClass);
	}


	this.init = function () {
		console.log('holajuanmi');
		
		for(var i = 0; i < dropdowns.length; i++) {
			dropdowns[i].addEventListener('mouseenter', showDropdown);
			dropdowns[i].addEventListener('mouseleave', hideDropdown); 
		}
	}

}

module.exports = Dropdown;

