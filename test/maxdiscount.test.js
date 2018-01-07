const expect = require('expect.js');
const discount = require('../main');


describe('buy 2 get 1 free maxDiscount', () => {

  //beforeEach(discount.maxDiscount = 0)

  it('returns 26 for [10,20,17,7,16,19,16]', () => {
    const maxDiscount = discount.getMaxDiscount([10,20,17,7,16,19,16]);
    expect(maxDiscount).to.equal(26);
  });

  it('returns 56 for [10,20,17,7,16,19,16,90,30,80]', () => {
    const maxDiscount = discount.getMaxDiscount([10,20,17,7,16,19,16,90,30,80])
    expect(maxDiscount).to.equal(56);
  });

  it('returns 7 for [1,2,7,8,10,2]', () => {
    const maxDiscount = discount.getMaxDiscount([1,2,7,8,10,2]);
    expect(maxDiscount).to.equal(7);
  });

  it('returns 30 for [15,15,15,15,15,15]', () => {
    const maxDiscount = discount.getMaxDiscount([15,15,15,15,15,15]);
    expect(maxDiscount).to.equal(30);
  });

  it('returns 10 for [10,30,45]', () => {
    const maxDiscount = discount.getMaxDiscount([10,30,45]);
    expect(maxDiscount).to.equal(10);
  });
});
