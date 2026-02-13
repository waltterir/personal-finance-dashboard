export type Transaction = {
  id: string;
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
