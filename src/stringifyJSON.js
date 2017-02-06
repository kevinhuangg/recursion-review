// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if obj is a string, return string wrapped in double quotes
  
  //if obj is array, iterate array
   //call stringifyJSON on each value
   // return all stringified values, joined with ',' and wrapped in brackets
  
  //if obj is object, iterate over object
    //declare result array
    //call stringifyJSON on each property and key
      //concat stringified key and property with ':' and push to result array
    //return result array joined with ',' and wrapped in curly brackets

  //otherwise
    return '' + obj;
};
