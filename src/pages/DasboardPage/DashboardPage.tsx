import {
  selectMonthlyTransactions,
  selectMonthlyTotalIncome,
  selectMonthlyTotalExpense,
} from "../../features/dashboard/model/selectors";
import type { Transaction } from "../../features/transactions/model/types";

export function DashboardPage(props: { transactions: Transaction[] }) {
  const selectedMonth = "2026-02";
  const monthly = selectMonthlyTransactions(props.transactions, selectedMonth);
  const monthlyIncome = selectMonthlyTotalIncome(monthly);
  const monthlyExpense = selectMonthlyTotalExpense(monthly);
  const net = monthlyIncome - monthlyExpense;

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>Selected month: {selectedMonth}</p>
        <p>Transactions this month: {monthly.length}</p>
        <p>Monthly income: {monthlyIncome.toFixed(2)}€</p>
        <p>Monthly expense: {monthlyExpense.toFixed(2)}€</p>
        <p>Monthly net: {net.toFixed(2)}€</p>
      </div>
    </>
  );
}
