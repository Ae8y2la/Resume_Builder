// app.ts
var form = document.getElementById("cvForm");
var cvContent = document.getElementById("cvContent");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("Skills & Certifications").value;
    // Build the CV content
    cvContent.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h4>Education</h4>\n    <p>").concat(education, "</p>\n    <h4>Work Experience</h4>\n    <p>").concat(experience, "</p>\n  ");
});
