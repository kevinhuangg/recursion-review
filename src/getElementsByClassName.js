// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var result = [];

  var checkNode = function(node){
  //check if node has matching className
    //if match, push node into result

  //iterate over child nodes
    //call checkNode on each node

  };

  checkNode(document.body);

  return result;
};
