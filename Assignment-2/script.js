const resultEle = document.getElementById("result");

// Problem 1
const closestLeapYear = (year) => {
  return Math.ceil(year / 4) * 4;
};

const checkLeapYear = () => {
  let year = parseInt(prompt("Enter any year"));
  if (year) {
    if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
      resultEle.innerHTML = `${year} is a leap year`;
    } else {
      let nextLeapYear = closestLeapYear(year);
      resultEle.innerHTML = `${year} is not a leap year. After ${year}, ${nextLeapYear} is next leap year.`;
    }
  } else {
    resultEle.innerHTML = "Invalid year";
  }
};

// Problem 2
const PI = 3.14;
const calculateArea = () => {
  let shape = prompt("Enter the shape (Circle, Triangle, Square, Rectangle)");
  switch (shape.toLowerCase()) {
    case "circle":
      let radius = Number(prompt("Enter radius"));
      resultEle.innerText = `Area of circle is ${PI * radius * radius}.`;
      break;
    case "triangle":
      let base = Number(prompt("Enter base"));
      let height = Number(prompt("Enter height"));
      resultEle.innerText = `Area of triangle is ${(1 / 2) * base * height}.`;
      break;
    case "square":
      let side = Number(prompt("Enter side"));
      resultEle.innerText = `Area of square is ${side * side}.`;
      break;
    case "rectangle":
      let length = Number(prompt("Enter length"));
      let width = Number(prompt("Enter width"));
      resultEle.innerText = `Area of rectangle is ${length * width}.`;
      break;
    default:
      resultEle.innerText = "Invalid Shape.\nPlease try again.";
  }
};
