const courses = {
  haagsche: {
    par: 72,
    male: {
      Black: { SR: 147, CR: 76.6 },
      wit: { SR: 149, CR: 76.0 },
      geel: { SR: 148, CR: 72.9 },
      blauw: { SR: 140, CR: 70.7 },
      rood: { SR: 133, CR: 69.6 },
    },
    female: {
      geel: { SR: 150, CR: 79.3 },
      blauw: { SR: 146, CR: 77.0 },
      rood: { SR: 143, CR: 75.6 },
      oranje: { SR: 128, CR: 72.3 },
    },
  },
  leeuwenbergh: {
    par: 71,
    male: {
      wit: { SR: 138, CR: 71.4 },
      geel: { SR: 132, CR: 70.4 },
      blauw: { SR: 122, CR: 68.6 },
      rood: { SR: 115, CR: 66.6 },
    },
    female: {
      geel: { SR: 148, CR: 76.3 },
      blauw: { SR: 140, CR: 73.4 },
      rood: { SR: 130, CR: 71.5 },
      oranje: { SR: 119, CR: 69.1 },
    },
  },
  liemeer: {
    par: 72,
    male: {
      wit: { SR: 138, CR: 73.3 },
      geel: { SR: 136, CR: 71.1 },
      blauw: { SR: 133, CR: 68.9 },
      rood: { SR: 117, CR: 66.7 },
    },
    female: {
      geel: { SR: 145, CR: 77.4 },
      blauw: { SR: 138, CR: 75.2 },
      rood: { SR: 138, CR: 71.3 },
      oranje: { SR: 118, CR: 66.7 },
    },
  },
  hcr: {
    par: 71,
    male: {
      wit: { SR: 135, CR: 71.8 },
      geel: { SR: 128, CR: 69.8 },
      blauw: { SR: 125, CR: 69.0 },
      rood: { SR: 118, CR: 66.8 },
    },
    female: {
      geel: { SR: 139, CR: 75.6 },
      blauw: { SR: 138, CR: 74.0 },
      rood: { SR: 130, CR: 71.8 },
      oranje: { SR: 111, CR: 66.5 },
    },
  },
  lochemse: {
    par: 72,
    male: {
      wit: { SR: 128, CR: 74.0 },
      geel: { SR: 127, CR: 71.6 },
      blauw: { SR: 124, CR: 70.2 },
      rood: { SR: 119, CR: 68.2 },
    },
    female: {
      geel: { SR: 136, CR: 78.0 },
      blauw: { SR: 125, CR: 75.9 },
      rood: { SR: 125, CR: 73.4 },
      oranje: { SR: 123, CR: 70.8 },
    },
  },
  hilversumse: {
    par: 72,
    male: {
      wit: { SR: 145, CR: 75.1 },
      geel: { SR: 139, CR: 72.5 },
      blauw: { SR: 132, CR: 70.3 },
      rood: { SR: 128, CR: 68.6 },
    },
    female: {
      geel: { SR: 154, CR: 78.7 },
      blauw: { SR: 148, CR: 75.6 },
      rood: { SR: 138, CR: 73.6 },
      oranje: { SR: 128, CR: 70.5 },
    },
  },
  rosendaelsche: {
    par: 72,
    male: {
      wit: { SR: 133, CR: 74.6 },
      geel: { SR: 129, CR: 72.7 },
      blauw: { SR: 124, CR: 69.9 },
      rood: { SR: 114, CR: 67.9 },
    },
    female: {
      geel: { SR: 137, CR: 78.6 },
      blauw: { SR: 130, CR: 75.2 },
      rood: { SR: 126, CR: 72.9 },
      oranje: { SR: 118, CR: 70.0 },
    },
  },
  kennemerAB: {
    par: 72,
    male: {
      wit: { SR: 137, CR: 74.4 },
      geel: { SR: 133, CR: 71.8 },
      blauw: { SR: 129, CR: 70.2 },
      rood: { SR: 121, CR: 68.1 },
    },
    female: {
      geel: { SR: 147, CR: 78.0 },
      blauw: { SR: 138, CR: 76.2 },
      rood: { SR: 134, CR: 73.2 },
      oranje: { SR: 124, CR: 70.1 },
    },
  },
  kennemerAC: {
    par: 72,
    male: {
      wit: { SR: 138, CR: 74.6 },
      geel: { SR: 135, CR: 71.7 },
      blauw: { SR: 132, CR: 70.6 },
      rood: { SR: 125, CR: 68.3 },
    },
    female: {
      geel: { SR: 148, CR: 78.4 },
      blauw: { SR: 142, CR: 76.7 },
      rood: { SR: 131, CR: 73.7 },
      oranje: { SR: 120, CR: 70.1 },
    },
  },
  kennemerBC: {
    par: 72,
    male: {
      wit: { SR: 137, CR: 73.1 },
      geel: { SR: 131, CR: 71.1 },
      blauw: { SR: 128, CR: 69.6 },
      rood: { SR: 122, CR: 67.2 },
    },
    female: {
      geel: { SR: 148, CR: 77.3 },
      blauw: { SR: 144, CR: 75.5 },
      rood: { SR: 132, CR: 72.7 },
      oranje: { SR: 123, CR: 69.4 },
    },
  },
  noordwijkse: {
    par: 72,
    male: {
      wit: { SR: 143, CR: 75.1 },
      geel: { SR: 137, CR: 72.8 },
      blauw: { SR: 129, CR: 69.8 },
      rood: { SR: 124, CR: 67.5 },
    },
    female: {
      geel: { SR: 143, CR: 79.1 },
      blauw: { SR: 134, CR: 75.6 },
      rood: { SR: 127, CR: 73.6 },
      oranje: { SR: 124, CR: 72.3 },
    },
  },
  eindhovensche: {
    par: 72,
    male: {
      wit: { SR: 136, CR: 73.9 },
      geel: { SR: 132, CR: 71.4 },
      blauw: { SR: 127, CR: 69.4 },
      rood: { SR: 122, CR: 67.5 },
    },
    female: {
      geel: { SR: 142, CR: 77.4 },
      blauw: { SR: 134, CR: 74.9 },
      rood: { SR: 128, CR: 72.4 },
      oranje: { SR: 121, CR: 68.9 },
    },
  },
  depan: {
    par: 72,
    male: {
      wit: { SR: 149, CR: 73.5 },
      geel: { SR: 142, CR: 71.3 },
      blauw: { SR: 136, CR: 69.7 },
      rood: { SR: 125, CR: 67.3 },
    },
    female: {
      geel: { SR: 151, CR: 77.9 },
      blauw: { SR: 148, CR: 75.3 },
      rood: { SR: 139, CR: 72.5 },
      oranje: { SR: 133, CR: 71.7 },
    },
  },
  toxandria: {
    par: 72,
    male: {
      wit: { SR: 143, CR: 72.4 },
      geel: { SR: 137, CR: 70.8 },
      blauw: { SR: 130, CR: 69.2 },
      rood: { SR: 123, CR: 67.1 },
    },
    female: {
      geel: { SR: 140, CR: 77.5 },
      blauw: { SR: 138, CR: 74.9 },
      rood: { SR: 131, CR: 72.4 },
      oranje: { SR: 124, CR: 69.0 },
    },
  },
  elvalle: {
    par: 71,
    male: {
      wit: { SR: 135, CR: 73.3 },
      geel: { SR: 130, CR: 69.5 },
      blauw: { SR: 129, CR: 68.0 },
      rood: { SR: 107, CR: 64.0 },
    },
    female: {
      geel: { SR: 139, CR: 76.8 },
      blauw: { SR: 137, CR: 75.2 },
      rood: { SR: 123, CR: 69.0 },
    },
  },
  lascolinas: {
    par: 71,
    male: {
      wit: { SR: 138, CR: 72.1 },
      geel: { SR: 135, CR: 69.7 },
      blauw: { SR: 123, CR: 66.9 },
      rood: { SR: 114, CR: 64.8 },
    },
    female: {
      blauw: { SR: 134, CR: 72.5 },
      rood: { SR: 125, CR: 69.8 },
    },
  },
  lafinca: {
    par: 72,
    male: {
      wit: { SR: 139, CR: 74.6 },
      geel: { SR: 133, CR: 72.7 },
      blauw: { SR: 124, CR: 70.9 },
      rood: { SR: 123, CR: 69.1 },
    },
    female: {
      wit: { SR: 142, CR: 79.4 },
      geel: { SR: 139, CR: 76.6 },
      blauw: { SR: 132, CR: 72.9 },
      rood: { SR: 124, CR: 68.6 },
    },
  },
  lasramblas: {
    par: 72,
    male: {
      wit: { SR: 137, CR: 72.2 },
      geel: { SR: 136, CR: 71.8 },
      blauw: { SR: 131, CR: 69.5 },
      rood: { SR: 125, CR: 66.4 },
    },
    female: {
      blauw: { SR: 143, CR: 75.3 },
      rood: { SR: 139, CR: 72.4 },
    },
  },
  villamartin: {
    par: 72,
    male: {
      wit: { SR: 140, CR: 72.2 },
      geel: { SR: 139, CR: 71.5 },
      blauw: { SR: 133, CR: 69.6 },
      rood: { SR: 122, CR: 66.6 },
    },
    female: {
      blauw: { SR: 138, CR: 75.7 },
      rood: { SR: 131, CR: 72.5 },
    },
  },
  broekpolder: {
    par: 72,
    male: {
      wit: { SR: 139, CR: 74.4 },
      geel: { SR: 135, CR: 71.9 },
      blauw: { SR: 126, CR: 69.5 },
      rood: { SR: 118, CR: 67.7 },
    },
    female: {
      geel: { SR: 145, CR: 78.9 },
      blauw: { SR: 138, CR: 75.9 },
      rood: { SR: 133, CR: 73.3 },
      oranje: { SR: 123, CR: 70.3 },
    },
  },
  scherpenbergh: {
    par: 72,
    male: {
      geel: { SR: 127, CR: 70.3 },
      rood: { SR: 117, CR: 66.2 },
    },
    female: {
      geel: { SR: 140, CR: 76.4 },
      rood: { SR: 124, CR: 71.6 },
    },
  },
  weleveld: {
    par: 72,
    male: {
      geel: { SR: 130, CR: 69.4 },
      rood: { SR: 110, CR: 66.0 },
    },
    female: {
      geel: { SR: 147, CR: 75.4 },
      rood: { SR: 129, CR: 70.7 },
    },
  },
  driene: {
    par: 72,
    male: {
      geel: { SR: 124, CR: 69.5 },
      rood: { SR: 112, CR: 66.8 },
    },
    female: {
      geel: { SR: 137, CR: 74.8 },
      rood: { SR: 134, CR: 71.7 },
    },
  },
  ommen: {
    par: 72,
    male: {
      wit: { SR: 141, CR: 73.7 },
      geel: { SR: 137, CR: 72.9 },
      blauw: { SR: 127, CR: 70.1 },
      rood: { SR: 122, CR: 68.5 },
    },
    female: {
      geel: { SR: 145, CR: 79.4 },
      blauw: { SR: 143, CR: 75.5 },
      rood: { SR: 135, CR: 73.7 },
      oranje: { SR: 121, CR: 69.6 },
    },
  },
  sallandse: {
    par: 72,
    male: {
      wit: { SR: 131, CR: 72.4 },
      geel: { SR: 128, CR: 71.5 },
      blauw: { SR: 118, CR: 68.5 },
      rood: { SR: 115, CR: 67.4 },
    },
    female: {
      geel: { SR: 140, CR: 77.4 },
      blauw: { SR: 130, CR: 73.8 },
      rood: { SR: 128, CR: 72.6 },
      oranje: { SR: 112, CR: 67.6 },
    },
  },
};

let selectedCourse = null;
let selectedGender = null;
let selectedTee = null;

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
    baanSelect.value = "";

    document.getElementById("hcp").addEventListener("input", berekenSlagen);

    document.getElementById("score").addEventListener("input", berekenWHS);
  }
};
