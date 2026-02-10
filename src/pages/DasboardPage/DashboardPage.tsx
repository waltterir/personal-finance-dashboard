import { transactions } from "../../data/seed/transactions";
import { selectMonthlyTransactions } from "../../features/dashboard/model/selectors";

export function DashboardPage() {
  const selectedMonth = "2026-02";
  const monthly = selectMonthlyTransactions(transactions, selectedMonth);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Selected month: {selectedMonth}</p>
      <p>Transactions this month: {monthly.length}</p>
    </div>
  );
}
