const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../courses.json");
let raw;
try {
  raw = fs.readFileSync(filePath, "utf8");
} catch (err) {
  console.error(`ERROR: Could not read courses.json: ${err.message}`);
  process.exit(2);
}

let data;
try {
  data = JSON.parse(raw);
} catch (err) {
  console.error(`ERROR: Invalid JSON in courses.json: ${err.message}`);
  process.exit(2);
}

const errors = [];
if (typeof data !== "object" || Array.isArray(data) || data === null) {
  errors.push(
    "Top-level JSON should be an object mapping course keys to course objects.",
  );
}

const isNumber = (v) => typeof v === "number" && !Number.isNaN(v);
const isObject = (v) =>
  typeof v === "object" && v !== null && !Array.isArray(v);

Object.keys(data).forEach((key) => {
  const course = data[key];
  if (!isObject(course)) {
    errors.push(`${key}: course should be an object`);
    return;
  }
  if (!course.name || typeof course.name !== "string") {
    errors.push(`${key}: missing or invalid 'name' (string)`);
  }
  if (!isNumber(course.par)) {
    errors.push(`${key}: missing or invalid 'par' (number)`);
  }

  ["male", "female"].forEach((gender) => {
    if (gender in course) {
      if (!isObject(course[gender])) {
        errors.push(
          `${key}.${gender}: should be an object mapping tee keys to SR/CR`,
        );
        return;
      }
      const tees = Object.keys(course[gender]);
      if (tees.length === 0) {
        errors.push(`${key}.${gender}: no tees defined`);
      }
      tees.forEach((tee) => {
        const t = course[gender][tee];
        if (!isObject(t)) {
          errors.push(`${key}.${gender}.${tee}: should be an object`);
          return;
        }
        if (!isNumber(t.SR)) {
          errors.push(
            `${key}.${gender}.${tee}: missing or invalid 'SR' (number)`,
          );
        }
        if (!isNumber(t.CR)) {
          errors.push(
            `${key}.${gender}.${tee}: missing or invalid 'CR' (number)`,
          );
        }
      });
    }
  });
});

if (errors.length) {
  console.error("\nValidation failed:");
  errors.forEach((e) => console.error("- " + e));
  process.exit(2);
}

console.log(`Validated ${Object.keys(data).length} courses — OK.`);
process.exit(0);
