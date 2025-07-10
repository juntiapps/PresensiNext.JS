'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  departmentId: z.string({
    invalid_type_error: 'Please select a department.',
  }),
  name: z.string(),
  email: z.string(),
});

const CreateEmployee = FormSchema.omit({ id: true });
const UpdateEmployee = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    departmentId?: string[];
    email?: string[];
  };
  message?: string | null;
};

export async function createEmployee(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateEmployee.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    departmentId: formData.get('departemnt_id'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { name, email, departmentId } = validatedFields.data;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash("Presensi123!!", 10);

  // Insert data into the database
  try {
    await sql`
     INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
    `;
    const userId = await sql`
      SELECT id FROM users WHERE email = ${email}
    `;
    await sql`
      INSERT INTO employees (user_id, department_id)
        VALUES (${userId[0].id}, ${departmentId})
        ON CONFLICT (id) DO NOTHING;
    `;
    
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/employees');
  redirect('/dashboard/employees');
}

export async function updateEmployee(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateEmployee.safeParse({
    name: formData.get('amount'),
    departemenId: formData.get('department_id'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { name, departmentId } = validatedFields.data;

  try {
    await sql`
      UPDATE employees
      SET department_id = ${departmentId}
      WHERE id = ${id}
    `;
    await sql`
      UPDATE users
      SET name = ${name}
      WHERE id = (SELECT user_id FROM employees WHERE id = ${id})
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/employees');
  redirect('/dashboard/employees');
}

export async function deleteEmployee(id: string) {
  await sql`DELETE FROM employees WHERE id = ${id}`;
  revalidatePath('/dashboard/employees');
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
