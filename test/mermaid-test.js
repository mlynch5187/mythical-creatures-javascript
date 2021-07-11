var assert = require('chai').assert;
var Mermaid = require('../exercises/mermaid');

describe('Mermaid', function() {

  it('should be a function', function() {
    assert.isFunction(Mermaid);
  });

  it('should instantiate our Mermaid', function() {
    var mermaid = new Mermaid();

    assert.instanceOf(mermaid, Mermaid);
  });

  it('should have a name', function() {
    var mermaid = new Mermaid('Ariel');

    assert.equal(mermaid.name, 'Ariel');
  });
});
