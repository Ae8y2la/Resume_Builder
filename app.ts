// app.ts
const form = document.getElementById("cvForm") as HTMLFormElement;
const cvContent = document.getElementById("cvContent") as HTMLDivElement;

form.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Build the CV content
  cvContent.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h4>Education</h4>
    <p>${education}</p>
    <h4>Work Experience</h4>
    <p>${experience}</p>
     <h4>skills</h4>
    <p>${skills}</p>
  `;
});