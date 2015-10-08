(function(doc) {
  var proto = Object.create(HTMLDivElement.prototype);

  proto.logExistence = function() {
    console.log('Map key exists.');
  };

  var MapKey = doc.registerElement('map-key', {
  	extends: 'div',
  	prototype: proto
  });
})(document);
