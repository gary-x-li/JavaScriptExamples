function hasMatchingProperty(sourceObj) {
  return function(targetObj) {
    var match = true;
    for (var prop in sourceObj) {
      if (!targetObj.hasOwnProperty(prop) ||
          targetObj[prop] !== sourceObj[prop]) {
        match = false;
        break;
      }
    }
    return match;
  };
}

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  arr = collection.filter(hasMatchingProperty(source));

  // Only change code above this line
  return arr;
}
