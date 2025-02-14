// FIXME: npm test /src/utils/groupBy.test.js
const { timer } = require('../utils/lib.js');
const { groupBy } = require('../refactoring/siny/utils');
// 어떤 것을 해볼까요?

describe('groupBy 테스트', () => {
  describe('non-lazy', () => {
    it('case: 1, Normal', () => {
      const array = [6.1, 4.2, 6.3];
      const grouped = groupBy(array, Math.floor);

      expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
    });

    it('case: 2, Advanced', () => {
      const array = [
        [1, 'a'],
        [2, 'a'],
        [2, 'b'],
      ];

      // 두 번째 인자가 index
      const [groupedFirstIndex, groupedSecondIndex] = [groupBy(array, 0), groupBy(array, 1)];

      expect(groupedFirstIndex).toEqual({
        1: [[1, 'a']],
        2: [
          [2, 'a'],
          [2, 'b'],
        ],
      });

      expect(groupedSecondIndex).toEqual({
        a: [
          [1, 'a'],
          [2, 'a'],
        ],
        b: [[2, 'b']],
      });
    });

    it('case: 3, Advanced', () => {
      timer.start();
      const grouped = groupBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor);
      timer.end();

      expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
    });
  });
});
