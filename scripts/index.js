let score = 75;
let has_submitted_assignments = true;
let grade;
let status;

if (score >= 0 && score <= 100) {
  if (score >= 90) {
    console.log(`Score: ${score}`);
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log(`Score: ${score}`);
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log(`Score: ${score}`);
    console.log("Grade: C");
  } else if (score >= 60) {
    console.log(`Score: ${score}`);
    console.log("Grade: D");
  } else {
    console.log(`Score: ${score}`);
    console.log("Grade: F");
  }
} else {
  console.warn("Wrong number");
}

if (score >= 60) {
  if (has_submitted_assignments) {
    console.log("Passed with all homework submitted.");
  } else {
    console.log("Passed, but missing homework penalty applies.");
  }
} else {
  if (score > 50) {
    console.log("Failed, but eligible for a re-test.");
  } else {
    console.log("Failed completely. Must retake the course.");
  }
}
