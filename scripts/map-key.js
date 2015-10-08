(function(doc) {
  var proto = Object.create(HTMLElement.prototype);

  proto.logExistence = function() {
    console.log('Map key exists.');
  };

  proto.createdCallback = function() {
    console.log('Map key created.');

    this.addEventListener('click', function() {
      console.log('map key clicked.');
    });
  };

  var MapKey = doc.registerElement('map-key', {
  	prototype: proto
  });
})(document);
