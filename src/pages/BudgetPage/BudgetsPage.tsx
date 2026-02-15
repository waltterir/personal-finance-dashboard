import { budgets } from "../../data/seed/budgets";
import { categories } from "../../data/seed/categories";
import {
  buildBudgetRows,
  spentByCategory,
} from "../../features/budgets/model/calculations";
import type { Transaction } from "../../features/transactions/model/types";

export function BudgetsPage(props: { transactions: Transaction[] }) {
  const month = "2026-02";
  const spentTotals = spentByCategory(props.transactions, month);
  const monthlyBudgets = budgets.filter((b) => b.month === month);
  const rows = buildBudgetRows(monthlyBudgets, categories, spentTotals);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">Category</th>
              <th className="text-left py-2 px-3">Limit</th>
              <th className="text-left py-2 px-3">Spent</th>
              <th className="text-left py-2 px-3">%</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="border-b odd:bg-white/15" key={row.id}>
                <td className="py-2 px-3">{row.category}</td>
                <td className="py-2 px-3">{row.limit} €</td>
                <td className="py-2 px-3">{row.spent} €</td>
                <td className="py-2 px-3">{row.percent} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
