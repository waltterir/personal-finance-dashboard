import { useEffect, useState } from "react";
import { Header } from "../Layout/Header";
import { AppRoutes } from "./Routes";
import { budgets as seedBudgets } from "../data/seed";
import { createApiTransactionsRepo } from "../features/transactions/storage/transactionsApiRepo";
import type { Transaction } from "../features/transactions/model";

const repo = createApiTransactionsRepo();

export function App() {
  const [budgets] = useState(() => seedBudgets);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      try {
        const data = await repo.load();
        setTransactions(data ?? []);
      } catch (err) {
        console.error("Failed to load transactions", err);
      }
    }

    loadTransactions();
  }, []);

  const handleDeleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const handleImportTransactions = (newTransactions: Transaction[]) => {
    setTransactions((prev) => [...prev, ...newTransactions]);
  };

  return (
    <>
      <Header />
      <AppRoutes
        transactions={transactions}
        budgets={budgets}
        onDeleteTransaction={handleDeleteTransaction}
        onAddTransaction={handleAddTransaction}
        onImportTransaction={handleImportTransactions}
      />
    </>
  );
}
