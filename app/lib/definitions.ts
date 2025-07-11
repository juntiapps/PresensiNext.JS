// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Employee = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  department: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type EmployeesTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  department_id: string;
};

export type FormattedEmployeesTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  department_id: string;
};

export type EmployeeField = {
  id: string;
  name: string;
};

export type EmployeeForm = {
  id: string;
  department_id: string;
  email: string;
  name: string;
};
