export interface ITransaction {
  id: string;
  type: string;
  accountId: string;
  title: string;
  description: string;
  category: string;
  amount: number;
  payee: string;
  date_of_operation: string;
  createdAt: string;
  updatedAt: string;
}
