function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    obj.testScore > 50 ||
    typeof obj.isFFamily !== "boolean" ||
    typeof obj.schoolGrade !== "number" ||
    obj.schoolGrade > 30
  ) {
    return "Invalid Input";
  }
  let result = true;
  let totalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    totalScore = obj.testScore + obj.schoolGrade + 20;
  }
  if (totalScore < 80) {
    return (result = false);
  }
  return result;
}
