const answer = (number) => {
  let output = '';
  let isModified = false;
  const stringNumber = number.toString(10);
  if (number % 3 == 0 || stringNumber.includes('3')) {
    isModified = true;
    output += 'fizz';
  }
  if (number % 5 == 0 || stringNumber.includes('5')) {
    isModified = true;
    output += 'buzz';
  }
	return isModified ? output : number;
}
export default answer;
