import { transactions as seedTransactions } from "../../data/seed/transactions";
import { createLocalTransactionsRepo } from "../../features/transactions/storage/localRepo";
import { useState, useEffect } from "react";
import { TransactionForm } from "../../features/transactions/components/TransactionForm";
import { TransactionList } from "../../features/transactions/components/TransactionList";
import { categories } from "../../data/seed/categories";

export function TransactionPage() {
  const repo = createLocalTransactionsRepo();
  const [transactions, setTransactions] = useState(() => {
    const stored = repo.load();
    return stored.length > 0 ? stored : seedTransactions;
  });

  const handleDeleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    repo.save(transactions);
  }, [transactions]);

  return (
    <>
      <div>
        <TransactionForm />
      </div>
      <div>
        <TransactionList
          transactions={transactions}
          categories={categories}
          onDelete={handleDeleteTransaction}
        />
      </div>
    </>
  );
}
