$("#btnSend").click(function () {
    let letter=""
    let grade = (($("#assign").val() * .55) + 
    ($("#group").val() * .05) +
    ($("#quiz").val() * .1) +
    ($("#exam").val() * .2) +
        ($("#intex").val() * .1)) 

    if (grade >= 94) {
        letter = "A"
    }
    else if (grade >= 90) {
        letter = "A-"
    }
    else if (grade >= 87) {
        letter = "B+"
    }
    else if (grade >= 84) {
        letter = "B"
    }
    else if (grade >= 80) {
        letter = "B-"
    }
    else if (grade >= 77) {
        letter = "C+"
    }
    else if (grade >= 74) {
        letter = "C"
    }
    else if (grade >= 70) {
        letter = "C-"
    }
    else if (grade >= 67) {
        letter = "D+"
    }
    else if (grade >= 64) {
        letter = "D"
    }
    else if (grade >= 60) {
        letter = "D-"
    }
    else {
        letter = "E"
    }
    alert("Letter grade: " + letter + "\n" + "Final grade:  " + grade.toFixed(2) + "%", "Grade: ");
})