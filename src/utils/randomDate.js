export default function getRandomPastDate() {
  // Generate a random number of days between 0 and 364
  const daysInPast = Math.floor(Math.random() * 365);
  const currentDate = new Date();
  const pastDate = new Date(currentDate);
  pastDate.setDate(currentDate.getDate() - daysInPast);
  return pastDate;
}
