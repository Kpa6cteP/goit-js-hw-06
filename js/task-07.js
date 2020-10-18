import users from "./users.js";

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // .map(user => user.balance)
  return users.reduce((acc, amount) => { acc += amount.balance
  return acc;
}, 0)
};

console.log(calculateTotalBalance(users)); // 20916
