import { transactions } from "../../data/seed/transactions";
import { categories } from "../../data/seed/categories";

export function TransactionPage() {
  return (
    <>
      <div className="ml-160 mt-50">
        <ul>
          {transactions.map((transaction, index) => (
            <li className="flex gap-4" key={index}>
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
