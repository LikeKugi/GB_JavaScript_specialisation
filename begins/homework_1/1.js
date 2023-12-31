const fahrenheitQuery = document.getElementById('fahrenheit-query');
const celsiusConverted = document.getElementById('fahrenheit-deg');

const celsiusQuery = document.getElementById('celsius-query');
const fahrenheitConverted = document.getElementById('celsius-deg');


fahrenheitQuery.addEventListener("input", function () {
  if (fahrenheitQuery.value === '' || !+fahrenheitQuery.value) {
    celsiusConverted.innerHTML = '-';
    return
  }
  celsiusConverted.innerHTML = ((+fahrenheitQuery.value - 32) * 5 / 9).toFixed(2);
});


celsiusQuery.addEventListener("input", function () {
  if (celsiusQuery.value === '' || !+celsiusQuery.value) {
    fahrenheitConverted.innerHTML = '-';
    return;
  }
  fahrenheitConverted.innerHTML = ((9 / 5) * +celsiusQuery.value + 32).toFixed(2);
});
