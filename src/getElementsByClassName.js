// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element, arr
) {

  var arr = arr || [];

  if (arguments[1] === undefined) {
    element = document.body;
    if (element.classList.contains(className)) {
      arr.push(element);
    }
  }

  if (element.childNodes.length === 0) {
    return arr;
  }

  if (element.nodeType === 1) {
    for (var i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === 1) {
        if (element.childNodes[i].classList.contains(className)) {
          arr.push(element.childNodes[i]);
        }
        getElementsByClassName(className, element.childNodes[i], arr);
      }
    }
  }
  return arr;
};
