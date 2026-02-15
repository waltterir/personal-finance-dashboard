export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: "expense" | "income";
  amount: number;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
};
