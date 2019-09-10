import answer from '../index';

describe('Code kata', () => {
	it('should start writing your own test', () => {
		const hasStartedUpdatingTest = false;
		expect(hasStartedUpdatingTest).toEqual(true);
  });
  it('should have an answer', () => {
		expect(() => answer()).not.toThrow(new Error('No solution provided!'));
	});
});
