export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: Item[];
  total: number;
}

interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface ClientAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface IThemeContext {
  toggleTheme: () => void;
}
export interface IThemeProvider {
  children: any;
}
