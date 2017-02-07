// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

//input: JSON string
//output: Javascript object or value
var parseJSON = function(json) {
  var char = json[0];
  
  //next function: grabs the next character from the string as you parse through it
  var next = function next() {
    char = json[json.indexOf(char) + 1];
  };

  var string = function string() {
    var result = '';
    next();
    while (char !== '"') { // must implement handling escaped quotes!!
      next();
      result += char;
    }

    return result;
  };

  var boolean = function boolean() {
    var result = '';
    if (char = 't') {
      for (var i = 0; i < 4; i++) {
        result += char;
        next();
      }
      
    } else if (char = 'f') {
      for (var i = 0; i < 5; i++) {
        result += char;
        next();
      }
      
    }
    if (result === 'true' ) {
      return true;
    } 

    if (result === 'false') {
      return false;
    }

    throw new SyntaxError;
  };
  //if char is '"'
  if (char === '"') {
    //call string function
    return string();
  }
  //if char = 't' or 'f'
  if (char === 't' || char === 'f') {
    //call boolean function
    return boolean();
  }
};
