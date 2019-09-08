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
  it('should return fizzbuzz', () => {
		expect(answer(15)).toEqual('fizzbuzz');
		expect(answer(30)).toEqual('fizzbuzz');
  });
  it('should return input when input is not a valid input', () => {
		expect(answer('hello')).toEqual('hello');
		expect(answer('fizzbuzz')).toEqual('fizzbuzz');
		expect(answer(-11)).toEqual(-11);
  });
  // Stage 2
  it('should return fizz when the number has a 3 in it', () => {
		expect(answer(13)).toEqual('fizz');
		expect(answer(23)).toEqual('fizz');
		expect(answer(33)).toEqual('fizz');
  });
  it('should return buzz when the number has a 5 in it', () => {
		expect(answer(52)).toEqual('buzz');
		expect(answer(58)).toEqual('buzz');
		expect(answer(152)).toEqual('buzz');
  });
  // Stage 3
  it('should accept custom rules', () => {
    const customRules = {
      7: 'foo',
      9: 'bar',
    };
		expect(answer(2, customRules)).toEqual(2);
		expect(answer(7, customRules)).toEqual('foo');
		expect(answer(9, customRules)).toEqual('bar');
		expect(answer(63, customRules)).toEqual('foobar');
  });
});
