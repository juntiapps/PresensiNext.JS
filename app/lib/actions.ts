// 'use server';

// import { z } from 'zod';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// // import { signIn } from '@/auth';
// // import { AuthError } from 'next-auth';
// import { UUID } from 'crypto';

// const FormSchema = z.object({
//   id: z.string().uuid(),
//   departemenId: z.string().uuid({
//     message: 'Please select a valid department.',
//   }).nullable() // Izinkan null
//     .refine(val => val !== null && val !== '', { // Periksa null dan string kosong
//       message: 'Pilih departemen.', // Pesan error kustom Anda
//       path: ['departemenId'] // Pastikan path errornya benar
//     }),

//   nama: z.string().min(1, { message: 'Nama tidak boleh kosong.' }),
//   email: z.string().email({
//     message: 'Email tidak valid.'
//   }),
//   nip: z.string().min(1, { message: 'NIP tidak boleh kosong' }).max(18, {
//     message: 'NIP must be at most 18 characters long.',
//   }),
//   roleId: z.string().uuid({ message: 'pilih peran yang valid.' }).nullable() // Izinkan null
//     .refine(val => val !== null && val !== '', { // Periksa null dan string kosong
//       message: 'Pilih Peran.', // Pesan error kustom Anda
//       path: ['roleId'] // Pastikan path errornya benar
//     }),
// });

// const CreateEmployee = FormSchema.omit({ id: true });
// const UpdateEmployee = FormSchema.omit({ id: true });

// export type State = {
//   errors?: {
//     nama?: string[];
//     departemenId?: string[];
//     email?: string[];
//     nip?: string[];
//     roleId?: string[];
//   };
//   message?: string | null;
//   data?: {
//     nama?: string;
//     nip?: string;
//     email?: string;
//     departemenId?: string;
//     roleId?: string;
//   };
// };

// export async function createEmployee(prevState: State, formData: FormData) {
//   // Validate form fields using Zod
//   const validatedFields = CreateEmployee.safeParse({
//     nama: formData.get('nama'),
//     departemenId: formData.get('departemenId'),
//     email: formData.get('email'),
//     nip: formData.get('nip'),
//     roleId: formData.get('roleId'),
//   });

//   // If form validation fails, return errors early. Otherwise, continue.
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Create Invoice.',
//       data: {
//         nama: formData.get('nama') as string,
//         nip: formData.get('nip') as string,
//         email: formData.get('email') as string,
//         departemenId: formData.get('departemenId') as string,
//         roleId: formData.get('roleId') as string,
//       },
//     };
//   }

//   // Prepare data for insertion into the database
//   const { nama, departemenId, email, nip, roleId } = validatedFields.data;
//   // Insert data into the database
//   try {
//     const response = await fetch(process.env.BASE_URL + '/api/employees', {
//       method: 'POST',
//       body: JSON.stringify({ nama, departemenId, email, nip, roleId }),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     if (!response.ok) {
//       throw new Error('Failed to create employee');
//     }
//   } catch (error) {
//     // If a database error occurs, return a more specific error.
//     return {
//       message: 'Database Error: Failed to Add Employee.',
//     };
//   }

//   // Revalidate the cache for the invoices page and redirect the user.
//   revalidatePath('/dashboard/employees');
//   redirect('/dashboard/employees');
// }

// export async function updateEmployee(
//   id: UUID,
//   prevState: State,
//   formData: FormData,
// ) {
//   const validatedFields = UpdateEmployee.safeParse({
//     nama: formData.get('nama'),
//     departemenId: formData.get('departemenId'),
//     email: formData.get('email'),
//     nip: formData.get('nip'),
//     roleId: formData.get('roleId'),
//   });
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update Employee.',
//       data: {
//         nama: formData.get('nama') as string,
//         nip: formData.get('nip') as string,
//         email: formData.get('email') as string,
//         departemenId: formData.get('departemenId') as string,
//         roleId: formData.get('roleId') as string,
//       },
//     };
//   }

//   const { nama, departemenId, email, nip, roleId } = validatedFields.data;

//   try {
//     const response = await fetch(`${process.env.BASE_URL}/api/employees/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ nama, departemenId, email, nip, roleId }),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     if (!response.ok) {
//       throw new Error('Failed to update employee');
//     }
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update employee.' };
//   }

//   revalidatePath('/dashboard/employees');
//   redirect('/dashboard/employees');
// }

// export async function deleteEmployee(id: string) {
//   const response = await fetch(`${process.env.BASE_URL}/api/employees/${id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' }
//   });
//   if (!response.ok) {
//     throw new Error('Failed to delete employee');
//   }
//   revalidatePath('/dashboard/employees');
// }

// // export async function authenticate(
// //   prevState: string | undefined,
// //   formData: FormData,
// // ) {
// //   try {
// //     await signIn('credentials', formData);
// //   } catch (error) {
// //     if (error instanceof AuthError) {
// //       switch (error.type) {
// //         case 'CredentialsSignin':
// //           return 'Invalid credentials.';
// //         default:
// //           return 'Something went wrong.';
// //       }
// //     }
// //     throw error;
// //   }
// // }
'use client';
export async function createEmployee(payload: {
  nama: string;
  email: string;
  nip: string;
  departemenId: string;
  roleId: string;
}) {
  const res = await fetch('/api/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to create employee');
  }

  return await res.json();
}

export async function updateEmployee(id: string, payload: {
  nama: string;
  email: string;
  nip: string;
  departemenId: string;
  roleId: string;
}) {
  const res = await fetch(`/api/employees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to update employee');
  }

  return await res.json();
}

export async function deleteEmployee(id: string) {
  console.log('Deleting employee with ID:', id);
  const res = await fetch(`/api/employees/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to delete employee');
  }

  return await res.json();
}
