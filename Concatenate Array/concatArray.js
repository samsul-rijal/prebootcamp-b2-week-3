function concatArray() {
  const numbers1 = [1, 2, 1, 3, 4, 1, 5, 6];
  const numbers2 = [7, 2, 4, 1, 5, 6, 8, 3];
  let newNumbers = numbers1.concat(numbers2);

  const result = newNumbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });

  console.log(result);
  document.getElementById("output").innerHTML = result;
}
