function removesArray() {
  let array = ["a", "b", "c", "d", "e"];
  let remove = "b";

  array = array.filter(function (item) {
    return item !== remove;
  });

  console.log(array);
  document.getElementById("output").innerHTML = array;
}
