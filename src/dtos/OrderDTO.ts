export interface OrderDTO {
  id: string;
  clientEmail: string;
  clientName: string;
  clientPhone: string;
  createdAt: Date;
  isCompleted: boolean;
  productName: string;
  updatedAt: Date;
}