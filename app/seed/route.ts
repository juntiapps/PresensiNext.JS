import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { employees, users } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedEmployees() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS employees (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      departement_id UUID NOT NULL,
    );
  `;

  const insertedEmployees = await Promise.all(
    employees.map(
      (employee: any) => sql`
        INSERT INTO employees (department_id )
        VALUES (${employee.department_id})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedEmployees;
}

