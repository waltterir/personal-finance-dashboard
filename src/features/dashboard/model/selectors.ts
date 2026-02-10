import type { Transaction } from "../../transactions/model/types";

export function selectMonthlyTransactions(
  transactions: Transaction[],
  selectedMonth: string,
): Transaction[] {
  return transactions.filter((t) => t.date.startsWith(selectedMonth));
}

export function selectMonthlyTotalIncome(monthlyTransactions: Transaction[]) {
  return monthlyTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function selectMonthlyTotalExpense(monthlyExpense: Transaction[]) {
  return monthlyExpense
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}
