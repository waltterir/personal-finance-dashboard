import { Header } from "../Layout/Header";
import { AppRoutes } from "./Routes";
import { transactions as seedTransactions } from "../data/seed";
import { createLocalTransactionsRepo } from "../features/transactions/storage/localRepo";
import type { Transaction } from "../features/transactions/model/types";
import { budgets as seedBudgets } from "../data/seed";
import { useState, useEffect } from "react";

export function App() {
  const repo = createLocalTransactionsRepo();
  const [budgets] = useState(() => seedBudgets);
  const [transactions, setTransactions] = useState(() => {
    const stored = repo.load();
    if (stored === null) {
      repo.save(seedTransactions);
      return seedTransactions;
    }
    return stored;
  });

  const handleDeleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const handleImportTransactions = (newTransaction: Transaction[]) => {
    setTransactions((prev) => [...prev, ...newTransaction]);
  };

  useEffect(() => {
    repo.save(transactions);
  }, [transactions]);

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
