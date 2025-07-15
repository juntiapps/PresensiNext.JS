// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { DepartmentField, Employee, EmployeeField, EmployeeForm } from "./definitions";

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

let employees1: Employee[] = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
    department_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
    department_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442b',
    name: 'Arief Rahman',
    email: 'arief@rahman.com',
    image_url: '/customers/lee-robinson.png',
    department_id: '3958dc9e-712f-4377-85e9-fec4b6a6442b'
  },
];

const departments: DepartmentField[] = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa' ,
    name: 'Sumber Daya Manusia'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Pengembangan Perangkat Lunak'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442b',
    name: 'Infrastruktur IT'
  },
];

const globalForEmployees = globalThis as any;

if (!globalForEmployees.employees) {
  globalForEmployees.employees = [
    ...employees1,
  ]; // hanya diinisialisasi 1x
}

const employees = globalForEmployees.employees;

export { users, employees, departments };
