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

  let checkBasicMetobol;

  if (womanInput) {
    checkBasicMetobol =
      655.1 + 9.6 * weightInput + 1.8 * heightInput - 4.7 * ageInput;
  } else {
    checkBasicMetobol =
      664.7 + 13.7 * weightInput + 5 * heightInput - 6.8 * ageInput;
  }

  let palFactor;
  if (leisureInput == "sleeping") {
    palFactor = "0.95";
  } else if (leisureInput == "sedentary") {
    palFactor = "1.2";
  } else if (leisureInput == "low") {
    palFactor = "1.5";
  } else if (leisureInput == "moderate") {
    palFactor = "1.7";
  } else if (leisureInput == "high") {
    palFactor = "1.9";
  } else if (leisureInput == "very-high") {
    palFactor = "2.2";
  }

  const checkTotalMetobol = checkBasicMetobol * Number(palFactor);
  const checkTotalKj = checkBasicMetobol * 4.1868 * Number(palFactor);

  basicCaloriesKj.textContent = (checkBasicMetobol * 4.1868).toFixed(2);
  totalCaloriesKJ.textContent = checkTotalKj.toFixed(2);

  basicCaloriesOutput.textContent = checkBasicMetobol.toFixed(2);
  totalCaloriesOutput.textContent = checkTotalMetobol.toFixed(2);
};
