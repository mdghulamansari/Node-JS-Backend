const resultEle = document.getElementById("result");

// Problem 1
const closestLeapYear = (year) => {
  return Math.ceil(year / 4) * 4;
};

const checkLeapYear = () => {
  let year = parseInt(prompt("Enter any year"));

  if (isNaN(year) || year <= 0) {
    resultEle.innerHTML = "Invalid year";
    return;
  }

  if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
    resultEle.innerHTML = `${year} is a leap year`;
  } else {
    let nextLeapYear = closestLeapYear(year);
    resultEle.innerHTML = `${year} is not a leap year. After ${year}, ${nextLeapYear} is next leap year.`;
  }
};

// Problem 2
const PI = 3.14;

const takeInputAndValidate = (msg) => {
  let num = Number(prompt(msg));
  if (isNaN(num)) {
    throw Error("Please enter number only.");
  }

  if (num < 0) {
    throw Error("Please enter +ve number.");
  }
  return num;
};

const calculateArea = () => {
  let shape = prompt("Enter the shape (Circle, Triangle, Square, Rectangle)");
  if (!shape) {
    resultEle.innerText = "Please enter the shape.";
    return;
  }

  try {
    switch (shape.toLowerCase()) {
      case "circle":
        let radius = takeInputAndValidate("Enter radius");
        resultEle.innerText = `Area of circle is ${PI * radius * radius}.`;
        break;
      case "triangle":
        let base = takeInputAndValidate("Enter base");
        let height = takeInputAndValidate("Enter height");
        resultEle.innerText = `Area of triangle is ${(1 / 2) * base * height}.`;
        break;
      case "square":
        let side = takeInputAndValidate("Enter side");
        resultEle.innerText = `Area of square is ${side * side}.`;
        break;
      case "rectangle":
        let length = takeInputAndValidate("Enter length");
        let width = takeInputAndValidate("Enter width");
        resultEle.innerText = `Area of rectangle is ${length * width}.`;
        break;
      default:
        resultEle.innerText = "Invalid Shape.\nPlease try again.";
    }
  } catch (error) {
    resultEle.innerText = error.message;
  }
};
