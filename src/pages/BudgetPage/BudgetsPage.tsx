import { budgets } from "../../data/seed/budgets";
import { categories } from "../../data/seed/categories";
import { transactions } from "../../data/seed/transactions";
import {
  buildBudgetRows,
  spentByCategory,
} from "../../features/budgets/model/calculations";

export function BudgetsPage() {
  const month = "2026-02";
  const spentTotals = spentByCategory(transactions, month);
  const monthlyBudgets = budgets.filter((b) => b.month === month);
  const rows = buildBudgetRows(monthlyBudgets, categories, spentTotals);

  console.log(monthlyBudgets.length);
  console.log(monthlyBudgets.map((b) => b.categoryId));

  console.log(rows.length);
  console.log(rows.map((r) => r.category));

  return (
    <>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Category|</th>
            <th>Limit|</th>
            <th>Spent|</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.category}</td>
              <td>{row.limit}€</td>
              <td>{row.spent}€</td>
              <td>{row.percent}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
