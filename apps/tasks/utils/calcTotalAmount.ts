export function calcTotalAmount(data): string {
  const totalAmount = data.reduce((acc, cur) => {
    acc = acc + cur.amount;
    return acc;
  }, 0);

  return `TOTAL: ${totalAmount.toFixed(3)}`;
}
