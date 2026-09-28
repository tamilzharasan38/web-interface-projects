const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const department = document.getElementById("department").value.trim();

    const html = Number(document.getElementById("html").value);
    const css = Number(document.getElementById("css").value);
    const javascript = Number(
        document.getElementById("javascript").value
    );

    // Validate student details
    if (name === "" || roll === "" || department === "") {
        alert("Please enter all student details.");
        return;
    }

    // Validate marks
    if (
        html < 0 || html > 100 ||
        css < 0 || css > 100 ||
        javascript < 0 || javascript > 100
    ) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    // Calculate total and percentage
    const total = html + css + javascript;
    const percentage = total / 3;

    let grade;
    let status;

    // Automatic grade calculation
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Pass / Fail
    if (html < 40 || css < 40 || javascript < 40) {
        status = "❌ Fail";
    } else {
        status = "✅ Pass";
    }

    // Display student details
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRoll").textContent = roll;
    document.getElementById("displayDepartment").textContent = department;

    // Display result
    document.getElementById("total").textContent =
        total + " / 300";

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("grade").textContent = grade;

    document.getElementById("status").textContent = status;

});