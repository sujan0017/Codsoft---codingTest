const display = document.querySelector("#display")
const button = document.querySelectorAll("button")

button.forEach((button) => {
  button.addEventListener("click", (e) => updateCalculator(e.target.value))

})

const calculate = () => {
  try {
    display.value = eval(display.value)
   

  } catch (error) {
    display.value = 'Error'
  }
};

const clearDisplay = () => {
  display.value = ''
};

const updateCalculator = (input) => {
  display.value += input;
};


