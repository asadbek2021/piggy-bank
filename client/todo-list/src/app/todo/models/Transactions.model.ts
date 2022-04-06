export interface ITransaction {
  id: string;
  type: string;
  accountId: string;
  title: string;
  description: string;
  category: string;
  amount: number;
  date_of_operation: string;
  createdAt: string;
  updatedAt: string;
}
