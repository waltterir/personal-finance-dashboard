import { seedTransactions } from "../../data/seed/transactions";
import { categories } from "../../data/seed/categories";
import { createLocalTransactionsRepo } from "../../features/transactions/storage/localRepo";
import { useState } from "react";

export function TransactionPage() {
  const repo = createLocalTransactionsRepo();
  const [transactions, setTransactions] = useState(() => {
    const stored = repo.load();
    return stored.length > 0 ? stored : seedTransactions;
  });
 

  return (
    <>
      <div>
        <h1>Transactions</h1>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.date}</span>
              <span>{transaction.description}</span>
              <span>
                {
                  categories.find((cat) => cat.id === transaction.categoryId)
                    ?.name
                }
              </span>
              <span>{transaction.type}</span>
              <span>{transaction.amount}€</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
