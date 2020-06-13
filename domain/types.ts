export interface Exist {
  message: string;
}

export interface Expense {
  id: number;
  name: string;
  currency: string;
  amount: number;
  create_at: Date;
}
