var assert = require('chai').assert;
var Mermaid = require('../exercises/mermaid');
var Pearl = require('../exercises/pearl');

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

  it('should start with a no pearls', function() {
    var mermaid = new Mermaid('Ariel');

    assert.deepEqual(mermaid.pearls, []);
  });

  it('should be able to collect pearls', function() {
    var mermaid = new Mermaid('Ariel');
    var red = new Pearl('Red Pearl')
    var blue = new Pearl('Blue Pearl')
    var violet = new Pearl('Violet Pearl')

    mermaid.collectPearl(red);
    mermaid.collectPearl(blue);
    mermaid.collectPearl(violet);

    assert.equal(mermaid.pearls.length, 3);
    assert.instanceOf(mermaid.pearls[0], Pearl);
    assert.instanceOf(mermaid.pearls[1], Pearl);
    assert.instanceOf(mermaid.pearls[2], Pearl);

    assert.equal(mermaid.pearls[0].name, 'Red Pearl');
    assert.equal(mermaid.pearls[1].name, 'Blue Pearl');
    assert.equal(mermaid.pearls[2].name, 'Violet Pearl');
    assert.deepEqual(mermaid.pearls, [red, blue, violet]);
  });

  it('should be able to turn pearls to gold', function() {
    var mermaid = new Mermaid('Ariel');
    var red = new Pearl('Red Pearl')
    var blue = new Pearl('Blue Pearl')
    var violet = new Pearl('Violet Pearl')

    mermaid.collectPearl(red);
    mermaid.collectPearl(blue);
    mermaid.collectPearl(violet);

    assert.equal(mermaid.pearls.length, 3);
    assert.instanceOf(mermaid.pearls[0], Pearl);
    assert.instanceOf(mermaid.pearls[1], Pearl);
    assert.instanceOf(mermaid.pearls[2], Pearl);

    assert.equal(mermaid.pearls[0].name, 'Red Pearl');
    assert.equal(mermaid.pearls[1].name, 'Blue Pearl');
    assert.equal(mermaid.pearls[2].name, 'Violet Pearl');
    assert.deepEqual(mermaid.pearls, [red, blue, violet]);

    mermaid.turnToGold(red);

    assert.equal(mermaid.pearls.length, 3);
    assert.equal(mermaid.pearls[0].name, 'Gold Pearl');
    assert.deepEqual(mermaid.pearls, [red, blue, violet]);
  });
});
