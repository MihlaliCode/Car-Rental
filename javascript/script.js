function RentalCost(days) {
  const carRental = 40;
  const discountThreeDays = 20;
  const discountFiveDays = 50;

  let totalRental = carRental * days;
  const discount3Days = Math.floor(days / 3) * discountThreeDays;
  const discount5Days = Math.floor(days / 5) * discountFiveDays;

  totalRental -= discount3Days + discount5Days;

  return totalRental;
}

const Days = 5;
const totalRental = RentalCost(Days);
console.log(`Total rental cost for ${Days} days: ${totalRental}`);
