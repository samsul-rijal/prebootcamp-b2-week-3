function printReverse() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  numbers.sort(function (number1, number2) {
    return number2 - number1;
  });
  document.getElementById("output").innerHTML = numbers;
}
