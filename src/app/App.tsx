import { Header } from "../Layout/Header";
import { AppRoutes } from "./Routes";
import { transactions as seedTransactions } from "../data/seed/transactions";
import { createLocalTransactionsRepo } from "../features/transactions/storage/localRepo";
import { useState, useEffect } from "react";

export function App() {
  const repo = createLocalTransactionsRepo();
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

  useEffect(() => {
    repo.save(transactions);
  }, [transactions]);

  return (
    <>
      <Header />
      <AppRoutes
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
