// 1️⃣ Calculate the total quantity of all items
// 2️⃣ Calculate the total price of the grocery cart
// 3️⃣ Find the most expensive item (total price = price × quantity)

const groceries = [
  { name: "Rice", price: 60, quantity: 5 }, // price per kg
  { name: "Oil", price: 180, quantity: 2 }, // price per liter
  { name: "Milk", price: 70, quantity: 3 }, // price per liter
  { name: "Eggs", price: 12, quantity: 12 }, // price per piece
  { name: "Sugar", price: 55, quantity: 2 }, // price per kg
];


function shoppingCart(groceries) {
    let sumOfQuantity = 0;
    let totalPrice = 0;
    let mostExpensive = 0;
    for (const item of groceries) {
        sumOfQuantity = sumOfQuantity + item.quantity;
        totalPrice = totalPrice + (item.price * item.quantity);
        const itemTotal = item.price * item.quantity;
        if (itemTotal > mostExpensive) {
            mostExpensive = itemTotal;
        }
    }

    return [sumOfQuantity, totalPrice, mostExpensive];
}
console.log(shoppingCart(groceries)); 