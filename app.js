function analyzeResume() {
  const resumeText = document.getElementById("resumeInput").value.toLowerCase();

  // Mock industry skills
  const industrySkills = ["welding", "cad", "robotics", "ev battery maintenance", "diagnostics"];
  const foundSkills = industrySkills.filter(skill => resumeText.includes(skill));
  const missingSkills = industrySkills.filter(skill => !resumeText.includes(skill));

  // Mock recommendations
  const recommendations = missingSkills.map(skill => `Course for ${skill} (Naan Mudhalvan)`);

  document.getElementById("results").innerHTML =
    `<h3>Skills Found: ${foundSkills.join(", ") || "None"}</h3>
     <h3>Missing Skills: ${missingSkills.join(", ") || "None"}</h3>
     <h3>Recommendations:</h3>
     <ul>${recommendations.map(r => `<li>${r}</li>`).join("")}</ul>`;
}
