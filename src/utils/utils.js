export const getTotalAmount = (transactions = []) => {
  return transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
};

export const getProgress = (transactions, goal) => {
  const totalAmount = getTotalAmount(transactions);
  return totalAmount / goal.target_amount;
};
