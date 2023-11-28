
//You have toy box and each toy has it's own name
//In javascript, the HTMl elements are like toys.
//using variable(like containers) to store them to play them easily
// so below currencyEL-one/amountEl_one/.... are the variable storing the HTML elements
//each variable hold unique html element(for like storing ball in ball section, toy car in car section )


const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


// we are here using the function to return our out

  //inside the function two new variable has been created
  //value is property given by user in the input field
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

 //this is use to API providing for latest exchange rates thought network

  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json()) // when input received from user,parse it as JSON
    .then(data => {
      //  console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    });
}


// Event Listener
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});


calculate();
