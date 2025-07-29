'use client';

import {
  EmployeeField,
  EmployeeForm,
  FormattedEmployeesTable,
  FormattedMenusTable,
  LinkList,
  MenuForm,
  MenuTree,
} from './definitions';
import { UUID } from 'crypto';

//EMPLOYEES
export async function fetchDetailEmployee(id: UUID) {
  try {
    const response = await fetch('/api/employees/' + id);
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
    const response = await fetch('/api/employees');
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
    throw new Error('Failed to fetch employee table.');
  }
}

export async function fetchEmployees() {
  try {
    const response = await fetch('/api/employees');
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
    throw new Error('Failed to fetch employee count table.');
  }
}

//DEPARTEMEN
export async function fetchDepartments() {
  try {
    const response = await fetch('/api/departments');
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
    const response = await fetch('/api/roles');
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

//MENUS
export async function fetchMenus(query?: string) {
  try {
    const response = await fetch('/api/menus');
    if (!response.ok) {
      throw new Error('Failed to fetch menus');
    }
    const data = await response.json();
    // console.log(data)

    const menus: FormattedMenusTable[] = data.data?.map((menu: any) => ({
      id: menu.id,
      name: menu.name,
      url: menu.url,
      parentNama: menu.parentId ? menu.parent?.name : ""
    }));

    return menus;

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all menus.');
  }
}

export async function fetchDetailMenu(id: UUID) {
  try {
    const response = await fetch('/api/menus/' + id);
    if (!response.ok) {
      throw new Error('Failed to fetch menu');
    }
    const data = await response.json();

    const menu: MenuForm = {
      id: data.id,
      name: data.name,
      icon: data.icon,
      url: data.url,
      order: data.order,
      parentId: data.parentId
    };

    return menu;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all employees.');
  }
}

export async function fetchLinks(roleId: string, query?: string) {
  try {
    // const response = await fetch('/api/menus');
    const response = await fetch('/api/menus/tree', {
      method: 'POST',
      body: JSON.stringify({ roleId: roleId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch links');
    }
    const data = await response.json();

    const menus: LinkList[] = data.data?.filter((menu:any)=>menu.hasRole).map((menu: any) => ({
      id: menu.id,
      name: menu.name,
      href: menu.url,
      icon: menu.icon,
      hasRole: menu.hasRole,
      children: menu.children.length > 0 ? menu.children.filter((child:any)=>child.hasRole).map((child: any) => ({
        id: child.id,
        name: child.name,
        href: child.url,
        icon: child.icon,
        hasRole: child.hasRole,
      })) : []
      // parentNama: menu.parent?.name
    }));

    return menus;

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all links.');
  }
}

export async function fetchMenuTree(roleId: string, query?: string) {
  try {
    const response = await fetch('/api/menus/tree', {
      method: 'POST',
      body: JSON.stringify({ roleId: roleId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch menus');
    }
    const data = await response.json();

    const menus: MenuTree[] = data.data?.map((menu: any) => ({
      id: menu.id,
      name: menu.name,
      icon: menu.icon,
      url: menu.url,
      order: menu.order,
      children: menu.children,
      hasRole: menu.hasRole,
    }));

    // console.log(menus)

    return menus;

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all menus.');
  }
}

//CICO
export async function fetchCiCo(nip?: string, date?: Date,) {
  try {
    const response = await fetch('/api/ci-co', {
      method: 'POST',
      body: JSON.stringify({ date, nip }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cico today');
    }
    const cico = await response.json();

    return cico;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch cico today.');
  }
}
