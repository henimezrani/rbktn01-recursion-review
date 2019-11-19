// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var tmp = '[';
    for (var i = 0; i < obj.length; i++) {
      tmp += stringifyJSON(obj[i]) + ',';
    }
    if (tmp === '[') {
      return '[]';
    }
    return tmp.slice(0, tmp.length - 1) + ']';
  } else if (typeof obj === 'object') {
    if (obj === null) {
      return 'null';
    }
    if (obj instanceof Number) {
      return obj;
    }
    if (obj instanceof String) {
      return '\"' + obj + '\"';
    }
    if (obj instanceof Boolean) {
      return obj;
    }
    var tmp = '{';
    for (var key in obj) {
      if ((typeof obj[key] !== 'undefined') && (typeof obj[key] !== 'function')) {
        tmp += '\"' + key + '\":' + stringifyJSON(obj[key]) + ',';
      } else {
        return '{}'; 
      }
    }
    if (tmp === '{') {
      return '{}';
    }
    return tmp.slice(0, tmp.length - 1) + '}';
  } else if (typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (typeof obj === 'boolean') {
    return '' + obj;
  } else {
    return 'null';
  }
};
