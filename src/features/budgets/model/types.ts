export type Budget = {
  month: string;
  categoryId: string;
  limit: number;
};

export type BudgetsRow = {
  id: string;
  category: string;
  limit: number;
  spent: number;
  percent: number;
};
