'use server';

import { z } from 'zod';
import postgres from 'postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { randomUUID, UUID } from 'crypto';
// import { employees } from './placeholder-data';
import { Employee } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string().uuid({ message: 'ID harus berupa UUID yang valid.' }),
  department_id: z.string().uuid({
    message: 'Please select a valid department.',
  }),
  name: z.string(),
  email: z.string(),
});

const CreateEmployee = FormSchema.omit({ id: true });
const UpdateEmployee = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    department_id?: string[];
    email?: string[];
  };
  message?: string | null;
};

export async function createEmployee(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateEmployee.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    department_id: formData.get('department_id'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { name, email, department_id } = validatedFields.data;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash("Presensi123!!", 10);

  // Insert data into the database
  try {
    // await sql`
    //  INSERT INTO users (name, email, password)
    //     VALUES (${name}, ${email}, ${hashedPassword})
    //     ON CONFLICT (id) DO NOTHING;
    // `;
    // const userId = await sql`
    //   SELECT id FROM users WHERE email = ${email}
    // `;
    // await sql`
    //   INSERT INTO employees (user_id, department_id)
    //     VALUES (${userId[0].id}, ${departmentId})
    //     ON CONFLICT (id) DO NOTHING;
    // `;
    const newEmployee:Employee = {
      id: randomUUID(),
      name: name,
      department_id: department_id as UUID,
      email: email,
      image_url: '/customers/evil-rabbit.png', // Placeholder image URL
    };

    // employees.push(newEmployee);
    await fetch(process.env.BASE_URL+'/api/employees', {
      method: 'POST',
      body: JSON.stringify(newEmployee),
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Add Employee.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath('/dashboard/employees');
  // redirect('/dashboard/employees');
  return {
    message: 'Employee created successfully',
    success: true, // 👉 ditambahkan untuk deteksi di client
  };
}

export async function updateEmployee(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateEmployee.safeParse({
    name: formData.get('name'),
    department_id: formData.get('department_id'),
    email: formData.get('email'),
  });
  console.log('updateEmployee', validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Employee.',
    };
  }

  const { name, department_id, email } = validatedFields.data;

  try {
    // await sql`
    //   UPDATE employees
    //   SET department_id = ${department_id}
    //   WHERE id = ${id}
    // `;
    // await sql`
    //   UPDATE users
    //   SET name = ${name}
    //   WHERE id = (SELECT user_id FROM employees WHERE id = ${id})
    // `;
    const response = await fetch(`${process.env.BASE_URL}/api/employees/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, department_id, email }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
      throw new Error('Failed to update employee');
    }
    // const updatedEmployee = await response.json(); 
  } catch (error) {
    return { message: 'Database Error: Failed to Update employee.' };
  }

  // revalidatePath('/dashboard/employees');
  // redirect('/dashboard/employees');
  return {
    message: 'Employee updated successfully',
    success: true, // 👉 ditambahkan untuk deteksi di client
  };
}

export async function deleteEmployee(id: string) {
  // await sql`DELETE FROM employees WHERE id = ${id}`;
  const response = await fetch(`${process.env.BASE_URL}/api/employees/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }

  return {
    message: 'Employee deleted successfully',
    success: true, // 👉 ditambahkan untuk deteksi di client
  };
  // revalidatePath('/dashboard/employees');
}

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }
