export function generateCouponCode(
  title: string = "",
  expiryDate: string = ""
): string {
  // Convert the title to uppercase and remove spaces
  const upperCaseTitle = title.toUpperCase().replace(/\s+/g, "");

  // Format the expiry date in DDMMYYYY format
  const date = new Date(expiryDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}${month}${year}`;

  // Combine the uppercase title and formatted date
  return `${upperCaseTitle}-${formattedDate}`;
}
