import type { Transaction } from "../../transactions/model/types";

export function spentByCategory(
  transactions: Transaction[],
  month: string,
): Record<string, number> {
  const totals: { [categoryId: string]: number } = {};
  for (let t of transactions) {
    const tMonth = t.date.slice(0, 7);
    if (tMonth !== month) continue;
    if (t.type !== "expense") continue;
    const currentTotal = totals[t.categoryId] || 0;
    totals[t.categoryId] = currentTotal + Math.abs(t.amount);
  }
  return totals;
}
