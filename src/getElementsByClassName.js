// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var result = [];

  var checkNode = function(node){
  //check if node has matching className
  var classes = node.className.split(' ');
  if (classes.indexOf(className) >= 0) {
    //if match, push node into result
    result.push(node);
  }

  //iterate over child nodes
  for (var i=0; i<node.children.length; i++){
    //call checkNode on each node
    checkNode(node.children[i]);
  }

  };

  checkNode(document.body);

  return result;
};
