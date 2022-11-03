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

 const dateInput = document.getElementById("dateInput");
 const dateButton = document.getElementById("dateButton");
 const display = document.getElementById('display');

 dateButton.addEventListener("click", function() {
  display.innerHTML = "";
  let displayArray = [];
  for(const item of testData) {
    if(item.submissionDate === dateInput.value) {
      displayArray.push(item)
    }
  }
  console.log(displayArray)
  for(const item of displayArray) {
    display.innerHTML += `Student name: ${item.studentName}<br>Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>Quiz Score: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Submission Date: ${item.submissionDate}<br><br>`
  }
 });







  /*function onButtonClick() {
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