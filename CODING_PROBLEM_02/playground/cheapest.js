const phones = [
  { name: "Galaxy S23", price: 1200, color: "Black", camera: "50MP" },
  { name: "iPhone 15", price: 1400, color: "Silver", camera: "48MP" },
  { name: "Pixel 8", price: 900, color: "White", camera: "50MP" },
  { name: "OnePlus 12", price: 850, color: "Blue", camera: "48MP" },
  { name: "Xiaomi 14", price: 750, color: "Red", camera: "64MP" },
];

function cheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
console.log(cheapestPhone(phones));