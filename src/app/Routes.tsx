import { BudgetsPage } from "../pages/BudgetPage/BudgetsPage";
import { DashboardPage } from "../pages/DasboardPage/DashboardPage";
import { ImportPage } from "../pages/ImportPage/ImportPage";
import { TransactionPage } from "../pages/TransactionsPage/TransactionsPage";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/budgets" element={<BudgetsPage />} />
          <Route path="/import" element={<ImportPage />} />
        </Routes>
      </main>
    </>
  );
}
