export type Budgets = {
  month: string;
  categoryId: string;
  limit: number;
};

export type BudgetsRow = {
  id: number;
  category: string;
  limit: number;
  spent: number;
  percent: number;
};
