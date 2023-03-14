const checkCalory = () => {
  const heightInput = Number(document.querySelector(".height-input").value);
  const ageInput = Number(document.querySelector(".age-input").value);
  const weightInput = Number(document.querySelector(".weight-input").value);
  const womanInput = document.querySelector(".woman-input").checked;
  const leisureInput = document.querySelector("select").value;
  const basicCaloriesOutput = document.querySelector("#basic-calories");
  const totalCaloriesOutput = document.querySelector("#total-calories");
  const basicCaloriesKj = document.querySelector("#basic-kj");
  const totalCaloriesKJ = document.querySelector("#total-kj");
  let calculateBasicMetabolism;

  if (womanInput) {
    calculateBasicMetabolism =
      655.1 + 9.6 * weightInput + 1.8 * heightInput - 4.7 * ageInput;
  } else {
    calculateBasicMetabolism =
      664.7 + 13.7 * weightInput + 5 * heightInput - 6.8 * ageInput;
  }
  const checkTotalMetobolism = calculateBasicMetabolism * Number(leisureInput);
  const checkTotalKj = checkTotalMetobolism * 4.1868;
  basicCaloriesOutput.textContent = calculateBasicMetabolism.toFixed(2);
  basicCaloriesKj.textContent = (calculateBasicMetabolism * 4.1868).toFixed(2);
  totalCaloriesOutput.textContent = checkTotalMetobolism.toFixed(2);
  totalCaloriesKJ.textContent = checkTotalKj.toFixed(2);
};
