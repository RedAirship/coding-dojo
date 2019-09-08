const answer = (number, customRules = {3: 'fizz', 5: 'buzz'}) => {
  let output = '';
  let isModified = false;
  const stringNumber = number.toString(10);

  for (let [key, word] of Object.entries(customRules)) {
    if (number % key == 0 || stringNumber.includes(`${key}`)) {
      isModified = true;
      output += word;
    }
  };

	return isModified ? output : number;
}
export default answer;
