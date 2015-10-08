(function(doc) {
  var proto = Object.create(HTMLElement.prototype);

  proto.logExistence = function() {
    console.log('Map key exists.');
  };

  var MapKey = doc.registerElement('map-key', {
  	prototype: proto
  });
})(document);
