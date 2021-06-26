import {expect} from 'chai';
import check from './luhnCheck.js';

describe('check', function() {
  it('returns true when checking 694208', () => {
    expect(check(694208)).to.equal(true);
  });
  it('returns false when checking 694204', () => {
    expect(check(694204)).to.equal(false);
  });
  it('returns true when checking 79927398713', () => {
    expect(check(79927398713)).to.equal(true);
  });
  it('returns false when checking 79927398712', () => {
    expect(check(79927398712)).to.equal(false);
  });
  it('returns true when checking 42', () => {
    expect(check(42)).to.equal(true);
  });
  it('returns Sum when checking 41 (actually, false)', () => {
    expect(check(41)).to.equal(false);
  });
});
