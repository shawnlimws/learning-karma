// var assert = require('assert')

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(5))
      assert.equal(-1, [1, 2, 3].indexOf(0))
    })
  })
})

describe('karma test with Chai', () => {
  it('should expose the Chai assert method', () => {
    assert.ok('everything', 'everything is ok')
  })

  it('should expose the Chai expect method', () => {
    expect('foo').to.not.equal('bar')
  })

  it('should expose the Chai should property', () => {
    (1).should.not.equal(2)
    should.exist(123)
  })
})
