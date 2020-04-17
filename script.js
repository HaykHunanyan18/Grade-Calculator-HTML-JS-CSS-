function checkGrade(evt) {
 var grade = parseFloat(evt.currentTarget.value);

 if (grade > 100 || grade < 0) {
   console.log("Wrong Value")
   evt.currentTarget.style.color = "red"
 } else {
   console.log("Correct Value")
   evt.currentTarget.style.color = "black"
 }

}


function calculateGrade() {
  var attendance_perc = parseInt(document.getElementById("attendance_perc").innerHTML)

  var attendance_grade = parseFloat(document.getElementById("attendance_grade").value)

  var curr_attendance = attendance_perc * attendance_grade/100 
  console.log(calculateGrade)

  var homework_perc = parseInt(document.getElementById("homework_perc").innerHTML)

  var homework_grade = parseFloat(document.getElementById("homework_grade").value)

  var curr_homework = homework_perc * homework_grade/100
  console.log(calculateGrade)

  var midterm_perc = parseInt(document.getElementById("midterm_perc").innerHTML)

  var midterm_grade = parseFloat(document.getElementById("midterm_grade").value)

  var curr_midterm = midterm_perc * midterm_grade/100
  console.log(calculateGrade)

  var final_perc = parseInt(document.getElementById("final_perc").innerHTML)
  
  var final_grade = parseFloat(document.getElementById("final_grade").value)

  var curr_final = final_perc * final_grade/100
  console.log(calculateGrade)

  console.log(curr_attendance, curr_homework, curr_midterm, curr_final)
  var currentGrade = curr_attendance + curr_homework + curr_midterm + curr_final
  console.log(currentGrade)
  document.getElementById("currentGrade").innerHTML = currentGrade
}
