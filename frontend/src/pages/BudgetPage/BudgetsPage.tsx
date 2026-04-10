import { categories } from "../../data/seed";
import { buildBudgetRows, spentByCategory } from "../../features/budgets/model";
import type { BudgetsPageProps } from "../../features/budgets/model";

export function BudgetsPage({ transactions, budgets }: BudgetsPageProps) {
  const month = new Date().toISOString().slice(0, 7);
  const spentTotals = spentByCategory(transactions, month);
  const monthlyBudgets = budgets.filter((b) => b.month === month);
  const rows = buildBudgetRows(monthlyBudgets, categories, spentTotals);

  console.log("BudgetsPage transactions", transactions);

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
