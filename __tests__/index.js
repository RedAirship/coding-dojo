import answer from '../index';

describe('Code kata', () => {
  it('should return the number', () => {
		expect(answer(1)).toEqual(1);
		expect(answer(2)).toEqual(2);
		expect(answer(4)).toEqual(4);
		expect(answer(7)).toEqual(7);
		expect(answer(8)).toEqual(8);
	});
});
