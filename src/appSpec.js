/**
 * Created by jgluhov on 17/01/16.
 */
describe('filter', function() {
  beforeEach(module('app'));

  describe('reverse', function() {
    it('should reverse a string', inject(function(reverseFilter) {
      expect(reverseFilter('soso')).toEqual('osos');
    }))
  })

});
