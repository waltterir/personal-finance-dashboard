export type Budgets = {
  month: string;
  categoryId: string;
  limit: number;
};

export type BudgetsRow = {
  category: string;
  limit: number;
  spent: number;
  percent: number;
};
