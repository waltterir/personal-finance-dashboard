export type Transaction = {
  date: string;
  description: string;
  type: string;
  amount: number;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
};
