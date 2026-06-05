// Courses object will be loaded from courses.json
let courses = {};

let selectedCourse = null;
let selectedGender = null;
let selectedTee = null;

// Load courses from JSON file and populate the dropdown
async function loadCourses() {
  try {
    const response = await fetch("courses.json?v=1.1");
    courses = await response.json();
    populateCoursesDropdown();
  } catch (error) {
    console.error("Error loading courses:", error);
    document.getElementById("resultaat").innerText =
      "❌ Courses could not be loaded.";
  }
}

function populateCoursesDropdown() {
  const select = document.getElementById("baan");
  const placeholder = select.querySelector("option[disabled][selected]");

  // Remove old options (keep the placeholder)
  select
    .querySelectorAll("option:not([disabled])")
    .forEach((opt) => opt.remove());

  // Add courses from JSON in alphabetical order
  const courseKeys = Object.keys(courses).sort();
  courseKeys.forEach((key) => {
    const course = courses[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = course.name || key;
    select.appendChild(option);
  });
}

function selectCourse() {
  selectedCourse = document.getElementById("baan").value;
  document.getElementById("gender-section").style.display = selectedCourse
    ? "block"
    : "none";

  if (selectedGender) {
    updateActiveButton("gender-buttons", selectedGender);
    renderTeeButtons(selectedCourse, selectedGender);
  }
  berekenSlagen();
  berekenWHS();
}

function selectGender(gender) {
  selectedGender = gender;
  updateActiveButton("gender-buttons", gender);
  renderTeeButtons(selectedCourse, gender);
  document.getElementById("hcp-section").style.display = "block";
  berekenSlagen();
  berekenWHS();
}

function renderTeeButtons(course, gender) {
  const container = document.getElementById("tee-buttons");
  container.innerHTML = "";
  document.getElementById("tee-section").style.display = "block";
  if (!course || !gender) return;
  Object.keys(courses[course][gender]).forEach((tee) => {
    const btn = document.createElement("div");
    btn.className = "btn " + tee;
    btn.textContent = tee.charAt(0).toUpperCase() + tee.slice(1);
    btn.onclick = () => {
      selectedTee = tee;
      updateActiveButton("tee-buttons", tee);
      berekenSlagen();
      berekenWHS();
    };
    container.appendChild(btn);
  });
  if (selectedTee && courses[course][gender][selectedTee]) {
    updateActiveButton("tee-buttons", selectedTee);
  } else {
    selectedTee = null;
  }
}

function updateActiveButton(containerId, value) {
  const container = document.getElementById(containerId);
  [...container.children].forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase() === value) {
      btn.classList.add("active");
    }
  });
}

function berekenSlagen() {
  const hcp = parseFloat(document.getElementById("hcp").value);
  if (!selectedCourse || !selectedGender || !selectedTee || isNaN(hcp)) {
    document.getElementById("slagen-resultaat").value = "";
    return;
  }
  const { SR, CR } = courses[selectedCourse][selectedGender][selectedTee];
  const par = courses[selectedCourse].par;
  let slagen = (hcp * SR) / 113 + (CR - par);
  document.getElementById("slagen-resultaat").value = Math.round(slagen);
}

function berekenWHS() {
  const score = parseFloat(document.getElementById("score").value);
  if (!selectedCourse || !selectedGender || !selectedTee) return;
  const { SR, CR } = courses[selectedCourse][selectedGender][selectedTee];
  const par = courses[selectedCourse].par;
  if (isNaN(score)) {
    document.getElementById("resultaat").innerText = "⚠️ Vul je score in.";
    return;
  }
  let whs = (113 / SR) * (score - CR);
  document.getElementById("resultaat").innerText =
    `WHS-score: ${whs.toFixed(1)} (Par=${par}, SR=${SR}, CR=${CR})`;
}

window.onload = () => {
  const baanSelect = document.getElementById("baan");

  if (baanSelect) {
    // Load courses from JSON
    loadCourses();

    document.getElementById("hcp").addEventListener("input", berekenSlagen);

    document.getElementById("score").addEventListener("input", berekenWHS);
  }
};
