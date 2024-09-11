function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    serialNumber < waitingTimes.length
  ) {
    return "Invalid Input";
  }
  let sum = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    sum += waitingTimes[i];
  }
  let average = Math.round(sum / waitingTimes.length);
  let remains = serialNumber - 1 - waitingTimes.length;
  let waitTime = average * remains;
  return waitTime;
}
