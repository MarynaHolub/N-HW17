// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:
// `price` (число)
// `quantity` (число)
// `discount` (число, по умолчанию равен 0)
// Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.

function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0,
): number {
  return price * quantity - (price * quantity * discount) / 100;
}

console.log(calculateTotal(20, 3, 10));

// Задание 2
// Использование Union типов
// Создайте переменную `id`, которая может быть либо строкой, либо числом.
// Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.

function displayId(id: number | string): void {
  const result = typeof id === 'string' ? id.toUpperCase() : id * 10;

  console.log('ID:', result);
}

displayId('lalala');
displayId(25);

// Задание 3
// Объявление и типизация массивов объектов
// Создайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:
// `orderId` (строка)
// `amount` (число)
// `status` (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, и возвращает массив заказов, соответствующих указанному статусу.

const orders: {
  orderId: string;
  amount: number;
  status: 'pending' | 'shipped' | 'delivered';
}[] = [
  { orderId: 'ORD-001', amount: 150, status: 'pending' },
  { orderId: 'ORD-002', amount: 250, status: 'shipped' },
  { orderId: 'ORD-003', amount: 100, status: 'delivered' },
  { orderId: 'ORD-004', amount: 300, status: 'pending' },
];

function filterOrdersByStatus(
  orders: {
    orderId: string;
    amount: number;
    status: 'pending' | 'shipped' | 'delivered';
  }[],
  status: 'pending' | 'shipped' | 'delivered',
) {
  return orders.filter((order) => order.status === status);
}

console.log(filterOrdersByStatus(orders, 'pending'));

// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:
// название товара (строка)
// его цену (число)
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`. Функция должна прибавить изменение количества из кортежа к текущему значению в inventory (если товара ещё нет, добавить его с этим количеством) и вернуть обновлённый объект.

let productInfo: [string, number, number] = ['Laptop', 1200, 5];

let inventory: { [key: string]: number } = {
  Laptop: 10,
  Mouse: 20,
};

function updateStock(
  inventory: { [key: string]: number },
  productInfo: [string, number, number],
): { [key: string]: number } {
  const [name, price, quantity] = productInfo;

  if (inventory[name]) {     // обращение к свойству объекта по ключу, который хранится в переменной name
    inventory[name] += quantity;
  } else {
    inventory[name] = quantity;
  }

  return inventory;
}

console.log(updateStock(inventory, productInfo));
