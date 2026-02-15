import { BudgetsPage } from "../pages/BudgetPage/BudgetsPage";
import { DashboardPage } from "../pages/DasboardPage/DashboardPage";
import { ImportPage } from "../pages/ImportPage/ImportPage";
import { TransactionPage } from "../pages/TransactionsPage/TransactionsPage";
import { Route, Routes } from "react-router-dom";
import type { Transaction } from "../features/transactions/model/types";

export function AppRoutes(props: {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}) {
  return (
    <>
      <main>
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardPage transactions={props.transactions} />}
          />
          <Route
            path="/transactions"
            element={
              <TransactionPage
                transactions={props.transactions}
                onDeleteTransaction={props.onDeleteTransaction}
              />
            }
          />
          <Route
            path="/budgets"
            element={<BudgetsPage transactions={props.transactions} />}
          />
          <Route path="/import" element={<ImportPage />} />
        </Routes>
      </main>
    </>
  );
}
