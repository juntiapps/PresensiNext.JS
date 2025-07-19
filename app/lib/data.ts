import {
  EmployeeField,
  EmployeeForm,
  FormattedEmployeesTable,
} from './definitions';
import { UUID } from 'crypto';

//EMPLOYEES
export async function fetchDetailEmployee(id: UUID) {
  try {
    const response = await fetch(process.env.BASE_URL + '/api/employees/' + id);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const data = await response.json();

    const employee: EmployeeForm = {
      id: data.id,
      nama: data.nama,
      nip: data.nip,
      departemenId: data.departemen?.id || '',
      email: data.user?.email || '',
      image_url: data.image_url || '/customers/evil-rabbit.png', // Ensure image_url is always defined
      roleId: data.user?.role?.id || '', // Ensure roleId is always defined
    };

    return employee;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all employees.');
  }
}

export async function fetchFilteredEmployees(query: string) {
  try {
    const response = await fetch(process.env.BASE_URL + '/api/employees');
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const data = await response.json();

    const employees: FormattedEmployeesTable[] = data.data.map((employee: any) => ({
      id: employee.id,
      nama: employee.nama,
      departemenNama: employee.departemen?.nama || 'Unknown', // Ensure department_name is always a string
      image_url: employee.image_url || '/customers/evil-rabbit.png',
      roleNama: employee.user?.role?.nama // Ensure image_url is always defined
    }));

    return employees;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchEmployees() {
  try {
    const response = await fetch(process.env.BASE_URL + '/api/employees');
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const data = await response.json();

    const employees: EmployeeField[] = data.data.map((employee: any) => ({
      id: employee.id,
      nama: employee.nama,
    }));

    const count = data.count || employees.length;

    const result = {
      count: count,
      data: employees,
    };
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

//DEPARTEMEN
export async function fetchDepartments() {
  try {
    const response = await fetch(process.env.BASE_URL + '/api/departments');
    if (!response.ok) {
      throw new Error('Failed to fetch departments');
    }
    const employees = await response.json();

    return employees;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all departments.');
  }
}

//ROLES
export async function fetchRoles() {
  try {
    const response = await fetch(process.env.BASE_URL + '/api/roles');
    if (!response.ok) {
      throw new Error('Failed to fetch roles');
    }
    const roles = await response.json();

    return roles;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all roles.');
  }
}