function evenOddNumber(numbers) {
  const numStr = numbers.toString();

  const evenNumberArray = [];
  const oddNumberArray = [];

  for (let i = 0; i < numStr.length; i++) {
    const num = parseInt(numStr[i]);
    if (num % 2 === 0) {
      evenNumberArray.push(num);
    } else {
      oddNumberArray.push(num);
    }
  }

  evenNumberArray.sort((a, b) => b - a);
  oddNumberArray.sort((a, b) => b - a);
  console.log(evenNumberArray);

  let results = "";
  let evenIndex = 0;
  let oddIndex = 0;
  for (let j = 0; j < numStr.length; j++) {
    const num = parseInt(numStr[j]);
    if (num % 2 === 0) {
      results += evenNumberArray[evenIndex];
      evenIndex++;
    } else {
      results += oddNumberArray[oddIndex];
      oddIndex++;
    }
  }
  return results;
}

console.log(evenOddNumber(65875));