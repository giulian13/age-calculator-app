document
  .querySelector("#submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Select html elements
    let inputDay = document.querySelector("#day").value;
    let inputMonth = document.querySelector("#month").value;
    let inputYear = document.querySelector("#year").value;

    const dayErrorText = document.querySelector(".dayInputError");
    const monthErrorText = document.querySelector(".monthInputError");
    const yearErrorText = document.querySelector(".yearInputError");

    let dayLabel = document.querySelector(".dayLabel");
    let monthLabel = document.querySelector(".monthLabel");
    let yearLabel = document.querySelector(".yearLabel");

    const currentDate = new Date();

    if ((inputDay <= 31) & (inputDay > 0)) {
      dayErrorText.style.visibility = "hidden";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
    } else {
      dayErrorText.style.visibility = "visible";
      dayLabel.style.color = "red";
    }
    if ((inputMonth <= 12) & (inputMonth > 0)) {
      monthErrorText.style.visibility = "hidden";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
    } else {
      monthErrorText.style.visibility = "visible";
      monthLabel.style.color = "red";
    }

    if ((currentDate.getFullYear() > inputYear) & (inputYear > 0)) {
      yearErrorText.style.visibility = "hidden";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
    } else {
      yearErrorText.style.visibility = "visible";
      yearLabel.style.color = "red";
    }

    calculateAge();
  });

let age = {
  years: "",
  months: "",
  days: "",
};

function calculateAge() {
  let inputDay = document.querySelector("#day").value;
  let inputMonth = document.querySelector("#month").value;
  let inputYear = document.querySelector("#year").value;

  let outputDay = document.querySelector("#daysResult");
  let outputMonth = document.querySelector("#monthsResult");
  let outputYear = document.querySelector("#yearsResult");

  const currentDate = new Date();

  const birthDate = new Date(
    `${inputYear}-${inputMonth.padStart(2, "0")}-${inputDay.padStart(2, "0")}`
  );

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // Check the input values

  // Adjust for negative months or days
  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  age = {
    years: years.toString(),
    months: months.toString(),
    days: days.toString(),
  };

  if (
    inputDay !== "" &&
    inputMonth !== "" &&
    inputYear !== "" &&
    inputYear <= currentDate.getFullYear()
  ) {
    if (Math.sign(age.years) !== -1) {
      outputYear.innerHTML = age.years;
    } else {
      console.log(currentDate.getFullYear() - birthDate.getFullYear());
    }

    outputYear.innerHTML = age.years;
    outputMonth.innerHTML = age.months;
    outputDay.innerHTML = age.days;
    // console.log(typeof Math.sign(age.years));
  }
}
