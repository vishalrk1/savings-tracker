
export interface User {
  id: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
}

export interface Transaction {
  transaction_id: number;
  user_id: string;
  goal_id: string;
  transaction_date: Date;
  amount: number;
}

export interface Goal {
  goal_id: number;
  user_id: number;
  goal_name: string;
  target_amount: number;
  start_date: Date;
  end_date: Date;
  transactions: Transaction[];
}

export const dummyGoalsData = [
  {
    goal_name: 'Laptop',
    goal_id: 1,
    target_amount: 120000,
    start_date: new Date(),
    end_date: new Date(),
    transactions: [] as Transaction[],
  },
  {
    goal_name: 'Car',
    goal_id: 2,
    target_amount: 1200000,
    start_date: new Date(),
    end_date: new Date(),
    transactions: [] as Transaction[],
  },
  {
    goal_name: 'House',
    goal_id: 3,
    target_amount: 520000,
    start_date: new Date(),
    end_date: new Date(),
    transactions: [] as Transaction[],
  },
] as Goal[];
