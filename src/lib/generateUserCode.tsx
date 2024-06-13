export function generateUserCode(prefix: string, name: string) {
  // Get the initials from the name (only the first letter of each word)
  let initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  // Get the current date in YYYYMMDD format
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, "0");
  let day = String(currentDate.getDate()).padStart(2, "0");
  let formattedDate = `${year}${month}${day}`;

  // Generate a random 4-digit number
  let randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Concatenate all parts to form the user code
  return `${prefix}-${initials}-${formattedDate}${randomNumber}`;
}
