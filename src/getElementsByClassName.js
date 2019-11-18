// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element, arr
) {

	var arr = arr || []

	if (arguments[1] === undefined) {
		element = document.body;
	}

	if (element.childNodes.length === 0) {
		return arr;
	}
	if (element.nodeType === 1) {
		for (var i = 0; i < element.childNodes.length; i++) {
			console.log(element.childNodes)
			if (element.childNodes[i].nodeType === 1) {
				console.log("Parent Node is " + element)
				
				console.log("Child Node is ")
				console.log(element.childNodes[i])
				console.log("Class List is " + element.childNodes[i].classList)

				if(element.childNodes[i].classList.includes(className)) {
					console.log("hi");
					arr.push(element.childNodes[i]);
				}
				getElementsByClassName(className, element.childNodes[i], arr)
			}
		}
	}
	
};
