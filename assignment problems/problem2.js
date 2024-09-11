function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid email";
  }
  let count = 0;
  let position = -1;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      count++;
      position = i;
    }
  }
  if (count !== 1 || position === 0 || position === email.length - 1) {
    return "Invalid email";
  }

  const arrayInput = email.split("@");
  const userName = arrayInput[0];
  const domainName = arrayInput[1];
  const notification = userName + " sent you an email from " + domainName;
  return notification;
}
