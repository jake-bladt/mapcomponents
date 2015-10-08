(function(doc) {
  var proto = Object.create(HTMLElement.prototype);

  proto.logExistence = function() {
    console.log('Map key exists.');
  };

  proto.createdCallback = function() {
    console.log('Map key created.');
  };

  var MapKey = doc.registerElement('map-key', {
  	prototype: proto
  });
})(document);
