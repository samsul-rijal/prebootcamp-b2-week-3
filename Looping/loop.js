function printNumber() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = [];

  numbers.forEach((item) => {
    result.push(item);
  });

  document.getElementById("outputNumber").innerHTML = result;
}

function printKuadrat() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  result = numbers.map((item) => {
    return item * item;
  });
  document.getElementById("outputKuadrat").innerHTML = result;
}

function printKelipatan() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = numbers.map((item) => {
    return item * 3;
  });
  document.getElementById("outputKelipatan").innerHTML = result;
}
