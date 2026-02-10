import type { Transaction } from "../../transactions/model/types";

export function selectMonthlyTransactions(
  transactions: Transaction[],
  selectedMonth: string,
): Transaction[] {
  return transactions.filter((t) => t.date.startsWith(selectedMonth));
}

export function selectMonthlyTotalIncome() {}

export function selectMonthlyTotalExpense() {}

export function selectMonthlyNet() {}
