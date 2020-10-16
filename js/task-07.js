import users from "./users.js";

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  return users.map(user => user.balance).reduce((acc, amount) => acc + amount)
};

console.log(calculateTotalBalance(users)); // 20916