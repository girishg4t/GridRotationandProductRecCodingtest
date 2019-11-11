const { findBundleValue, getUpdatedBundleBasedonRule } = require('../Exercise2/productRecommendation');
const assert = require('assert');

describe('Product Recommendation', function () {
  it('get bundle value for age : 16, student : true, income : 0 =>  0', function () {
    assert.equal(findBundleValue(16, true, 0), 0);
  });
  it('get bundle value for age : 18, student : false , income : 25000 =>  2', function () {
    assert.equal(findBundleValue(18, false, 25000), 2);
  });
});

describe('Modify Bundle', function () {
  let output = [ 'Debit Card', 'Current Account Plus', 'Gold Credit Card' ];
  it('get bundle products as "Debit Card", "Current Account Plus", "Gold Credit Card" for Classic bundle with age : 25, student : false , income : 41000', function () {
    const result = getUpdatedBundleBasedonRule("Classic", 25, false, 41000);
    assert.deepEqual(result.Products, output);
  });
});
