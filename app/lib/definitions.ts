// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { UUID } from "crypto";

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: UUID;
  name: string;
  email: string;
  password: string;
};

export type Employee = {
  id: UUID;
  name: string;
  email: string;
  image_url: string;
  department_id: UUID;
};

export type EmployeesTableType = {
  id: UUID;
  name: string;
  email: string;
  image_url: string;
  department_id: UUID;
  // department_name: string;
};

export type FormattedEmployeesTable = {
  id: UUID;
  name: string;
  email: string;
  image_url: string;
  department_id: UUID;
  department_name: string;
};

export type EmployeeField = {
  id: UUID;
  name: string;
};

export type EmployeeForm = {
  id: UUID;
  department_id: UUID;
  email: string;
  name: string;
};

export type DepartmentField = {
  id: UUID;
  name: string;
};