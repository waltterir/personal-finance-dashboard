import { useState } from "react";
import type { Category, Transaction } from "../model/types";

export function TransactionForm(props: {
  categories: Category[];
  onAddTransaction: (transaction: Transaction) => void;
}) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"expense" | "income">("expense");
  const [categoryId, setCategoryId] = useState(
    props.categories.length > 0 ? props.categories[0].id : "",
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!date) return;
    if (!description.trim()) return;
    if (amount <= 0) return;
    if (!categoryId) return;

    const id = crypto.randomUUID();

    const newTran: Transaction = {
      id,
      date,
      description: description.trim(),
      amount,
      type,
      categoryId,
    };
    props.onAddTransaction?.(newTran);

    setAmount(0);
    setDate("");
    setDescription("");
    setType("expense");
    setCategoryId(props.categories.length > 0 ? props.categories[0].id : "");
  };

  return (
    <section>
      <h2>Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            id="dateId"
          />
        </div>
        <div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            id="descriptionId"
            placeholder="Give description:"
          />
        </div>
        <div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "expense" | "income")}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <input
            value={amount === 0 ? "" : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            name="amount"
            id="amountId"
            placeholder="Enter amount: €"
          />
        </div>
        <div>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {props.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
