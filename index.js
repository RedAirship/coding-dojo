const answer = (number) => {
  let output = '';
  let isModified = false;
  if (number % 3 == 0) {
    isModified = true;
    output += 'fizz';
  }
  if (number % 5 == 0) {
    isModified = true;
    output += 'buzz';
  }
	return isModified ? output : number;
}
export default answer;
