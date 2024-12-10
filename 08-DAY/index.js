function calculateDeliveryTime(houses, speed) {
  let distance = 0;
  for (let i = 0; i < houses.length; i++) {
    const [start, end] = houses[i];
    distanceToHouse = Math.sqrt(start ** 2 + end ** 2);
    distance += 2 * distanceToHouse;
  }
  return distance / speed;
}

const houses = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const speed = 10; // in km/h

const deliveryTime = calculateDeliveryTime(houses, speed);
console.log(`Delivery time: ${deliveryTime.toFixed(2)} hours`);
