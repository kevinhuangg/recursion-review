// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if obj is a string, return string wrapped in double quotes
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  //if obj is array, iterate array
  if (Array.isArray(obj)) {
    //call stringifyJSON on each value
    var stringifiedValues = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedValues.push(stringifyJSON(obj[i]));
    }
    // return all stringified values, joined with ',' and wrapped in brackets 
    return '[' + stringifiedValues.join(',') + ']';
  }
  
  //if obj is object, iterate over object
  if (obj && typeof obj === 'object') {
    //declare result array
    var result = [];
    
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        //concat stringified key and property with ':' and push to result array
        var pair = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        result.push(pair);
      }
    }
    //return result array joined with ',' and wrapped in curly brackets
    return '{' + result.join(',') + '}';
  }
  

  //otherwise
  return '' + obj;
};
