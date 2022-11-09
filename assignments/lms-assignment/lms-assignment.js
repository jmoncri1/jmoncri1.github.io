const testData = [
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 70,
    studentId: 1,
    studentName: "Bob Ross",
    submissionDate: "12/20/2020"
  },
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 77,
    studentId: 16,
    studentName: "Diana Ross",
    submissionDate: "12/20/2020"
  },
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 82,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "12/20/2020"
  },
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 88,
    studentId: 14,
    studentName: "Dylan Roberts",
    submissionDate: "12/20/2020"
  },
  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 82,
    studentId: 1,
    studentName: "Bob Ross",
    submissionDate: "1/20/2021"
  },
  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 89,
    studentId: 16,
    studentName: "Diana Ross",
    submissionDate: "1/20/2021"
  },

  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 73,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "1/20/2021"
  },

  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 85,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "1/20/2021"
  },
  {
    quizName: "Reading Comprehension",
    quizModule: "English",
    quizScore: 60,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "2/20/2020"
  },
  {
    quizName: "Reading Comprehension",
    quizModule: "English",
    quizScore: 83,
    studentId: 16,
    studentName: "Diana Ross",
    submissionDate: "2/20/2020"
  },
  {
    quizName: "Reading Comprehension",
    quizModule: "English",
    quizScore: 70,
    studentId: 14,
    studentName: "Dylan Roberts",
    submissionDate: "2/20/2020"
  }
];
/*  make a function that will take a date and return the matching objects  */
//name the function
function onDateButtonClick() {
  //make a variable that will hold the date input
  const dateInput = document.getElementById("dateInput");
  //make a variable that will house what is displayed
  const submittedDisplay = document.getElementById('submittedDisplay');
  const unsubmittedDisplay = document.getElementById("unsubmittedDisplay");
  //this line helps to clear the display so that the user will not be able to add duplicate inputs
  submittedDisplay.innerHTML = "";
  unsubmittedDisplay.innerHTML = "";
  //make a variable that will hold the array of those submitted on a certain day
  let displaySubmittedArray = [];
  //make a variable that will hold the array of those unsubmitted on a certain day
  let displayUnsubmittedArray = [];
  //search the array (testData) through each item
  for (const item of testData) {
    //check if the date input matches the date of the object
    if (item.submissionDate === dateInput.value) {
      //if the dates match, add that object to the variable made for submitted
      displaySubmittedArray.push(item);
    }
  }

  const studentNames = [];
  for (const item of displaySubmittedArray) {
    if (!studentNames.includes(item.studentName)) {
      studentNames.push(item.studentName)
    }
  }
  for (const item of testData) {
    if (!studentNames.includes(item.studentName) && !displayUnsubmittedArray.includes(item.studentName)) {
      displayUnsubmittedArray.push(item.studentName)
    }
  }






  /*
  //go through the array again
  for (item of testData) {
    //check if the date input matches the date of the object
    if(item.submissionDate === dateInput.value) {
     //if the date matches, remove it from the array
     
     //display just the names of the objects left
    }
  }*/






  console.log("displaySubmittedArray: ", displaySubmittedArray);
  console.log("displayUnsubmittedArray: ", displayUnsubmittedArray);
  for (const item of displaySubmittedArray) {
    submittedDisplay.innerHTML += `Student name: ${item.studentName}<br>Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>Quiz Score: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Submission Date: ${item.submissionDate}<hr><br><br>`
  }
  document.getElementById("headingForUnsubmitted").innerText = `These are the students who have not submitted quizes on that date:`

  for (const item of displayUnsubmittedArray) {
    unsubmittedDisplay.innerHTML += `Student name: ${item}`;
  }
};

function onIdButtonClick() {
  const idInput = document.getElementById("idInput");
  const idDisplay = document.getElementById("idDisplay");

  idDisplay.innerHTML = "";
  let idDisplayArray = [];
  for (const item of testData) {
    if (item.studentId == idInput.value) {
      idDisplayArray.push(item);
    }
  }
  for (const item of idDisplayArray) {
    idDisplay.innerHTML += `Student name: ${item.studentName}<br>Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>Quiz Score: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Submission Date: ${item.submissionDate}<hr><br><br>`
  }
};

function onAverageButton() {
  let sum = 0;
  for (const module of testData) {
    sum += module.quizScore
  }
  console.log(sum)
  let average = (sum / testData.length).toFixed(1);
  console.log(average);

  document.getElementById('displayAverage').innerText = `The average is: ${average}`;

}









/*{
  const dateInput = document.querySelector("#dateInput").value;
  const displayStudent = getStudentInformation(dateInput);
  document.querySelector("#display").innerText = displayStudent;
}

function getStudentInformation(submissionDate) {
  for(let i = 0; i < testData.length; i ++) {
     if (testData[i].submissionDate == submissionDate) {
      const student = testData[i];
         return student;
     }
  }
}*/