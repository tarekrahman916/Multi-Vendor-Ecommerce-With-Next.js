export function generateUserCode(prefix: string, fullName: string) {
  // Extract initials from full name
  const initials = fullName
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

  // Get current time in the format HHMMSSsss (hours, minutes, seconds, milliseconds)
  const now = new Date();
  const time =
    now.getHours().toString().padStart(2, "0") +
    now.getMinutes().toString().padStart(2, "0") +
    now.getSeconds().toString().padStart(2, "0") +
    now.getMilliseconds().toString().padStart(3, "0");

  // Generate the user code
  const userCode = `${prefix}-${initials}-${time}`;

  return userCode;
}
