import { BudgetsPage } from "../pages/BudgetPage/BudgetsPage";
import { DashboardPage } from "../pages/DasboardPage/DashboardPage";
import { ImportPage } from "../pages/ImportPage/ImportPage";
import { TransactionPage } from "../pages/TransactionsPage/TransactionsPage";
import { Route, Routes } from "react-router-dom";
import type { AppRoutesProps } from "../features/routes/model/routes";

export function AppRoutes({
  transactions,
  budgets,
  onDeleteTransaction,
  onAddTransaction,
}: AppRoutesProps) {
  return (
    <>
      <main>
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardPage transactions={transactions} />}
          />
          <Route
            path="/transactions"
            element={
              <TransactionPage
                transactions={transactions}
                onDeleteTransaction={onDeleteTransaction}
                onAddTransaction={onAddTransaction}
              />
            }
          />
          <Route
            path="/budgets"
            element={
              <BudgetsPage budgets={budgets} transactions={transactions} />
            }
          />
          <Route path="/import" element={<ImportPage />} />
        </Routes>
      </main>
    </>
  );
}
