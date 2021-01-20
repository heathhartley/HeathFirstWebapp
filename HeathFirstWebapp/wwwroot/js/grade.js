

var cal = document.getElementById("cal");


cal.addEventListener("click", function () {
    function handleForm(event) { event.preventDefault(); } 
    /* create variables for each of the inputs*/
    var quiz = +document.getElementById("quiz").value;
    var exam = +document.getElementById("exam").value;
    var assignment = +document.getElementById("assignment").value;
    var index = +document.getElementById("index").value;
    var group_project = +document.getElementById("group_project").value;
    var letter_grade;
    var final_grade = assignment + quiz + exam + index + group_project;
/* find final grade letter using if statement */
    if (final_grade >= 94) {
        letter_grade = "A"
    }
    else if (final_grade >= 90) {
        letter_grade = "A-"
    }
    else if (final_grade >= 87) {
        letter_grade = "B+"
    }
    else if  (final_grade >= 84) {
        letter_grade = "B"
    }
    else if  (final_grade >= 80) {
        letter_grade = "B-"
    }
    else if  (final_grade >= 77) {
        letter_grade = "C+"
    }
    else if  (final_grade >= 74) {
        letter_grade = "C"
    }
    else if  (final_grade >= 70) {
        letter_grade = "C-"
    }
    else {
        letter_grade = "Please try harder"
    }
    /*add the inputs up to find their final grades*/
    document.getElementById("final").innerHTML = ("Final grade: " + (assignment + quiz + exam + index + group_project) + " out of 100" + "<br>" + "Letter Grade: " + letter_grade);
});

