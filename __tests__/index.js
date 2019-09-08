import answer from '../index';

describe('Code kata', () => {
  it('should return the number', () => {
		expect(answer(1)).toEqual(1);
		expect(answer(2)).toEqual(2);
		expect(answer(4)).toEqual(4);
		expect(answer(7)).toEqual(7);
		expect(answer(8)).toEqual(8);
  });
  it('should return fizz', () => {
		expect(answer(3)).toEqual('fizz');
		expect(answer(6)).toEqual('fizz');
		expect(answer(9)).toEqual('fizz');
  });
  it('should return buzz', () => {
		expect(answer(5)).toEqual('buzz');
		expect(answer(10)).toEqual('buzz');
  });
});
