const answer = (number) => {
  if (number % 3 == 0) {
    return 'fizz';
  }
  if (number % 5 == 0) {
    return 'buzz';
  }
	return number;
}
export default answer;
