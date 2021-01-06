// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const getCurrentTime = () => {

  let day = new Date().getDay();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let second = new Date().getSeconds();
  return ` Today is ${weekDays[day]}.
  Current time: ${ hour}:${minutes}:${second}`;
};


// 2. Write a JavaScript program to print the contents of the current window. 

const printWindow = () => {
  window.print();
};

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

const triangleArea = (a, b, c) => {
  let perimeter = (a + b + c) / 2;
  let area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)))

  return +area.toFixed(2);
};
// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted 
// to input a guess number. If the user input matches with guess number, the program will display a message "Good Work"
//  otherwise display a message "Not matched".

const randomNum = (userNum) => {
  let num = Math.round(Math.random() * 10);
  console.log(num);

  if (userNum === num) {
    console.log("Good Work");
  } else {
    console.log("Not matched");

  }
};

// 12. Write a JavaScript program to get the website URL (loading page)


const getUrlPage = () => {
  return document.URL;
};