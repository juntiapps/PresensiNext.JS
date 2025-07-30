// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { UUID } from "crypto";

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: UUID;
  email: string;
  password: string;
};

export type Employee = {
  id: UUID;
  nama: string;
  email: string;
  image_url: string;
  departemenId: UUID;
};

export type EmployeesTableType = {
  id: UUID;
  nama: string;
  email: string;
  image_url: string;
  departemenId: UUID;
  // department_name: string;
};

//used
export type FormattedEmployeesTable = {
  id: UUID;
  nama: string;
  image_url: string;
  departemenNama: string;
  roleNama: string;
};

export type EmployeeField = {
  id: UUID;
  nama: string;
};

export type EmployeeForm = {
  id: UUID;
  departemenId: UUID;
  email: string;
  nama: string;
  nip: string;
  image_url: string;
  roleId: UUID;
};

export type MenuForm = {
  id: UUID;
  name: string;
  icon: string;
  url: string;
  order: string;
  parentId: UUID;
};
export type MenuField = {
  id: UUID;
  name: string;
};

export type MenuTree = {
  id: string;
  name: string;
  icon: string;
  url: string;
  order: number;
  children: MenuTree[];
  hasRole?: boolean;
};

export type LinkList = {
  id: UUID;
  name: string;
  href: string;
  icon: string;
  children: LinkList[];
  hasRole?: boolean;
};

export type DepartmentField = {
  id: UUID;
  nama: string;
};

export type RoleField = {
  id: UUID;
  nama: string;
};

export type FormattedMenusTable = {
  id: UUID;
  name: string;
  url: string;
  parentNama: string;
};

export type CiCo = {
  id: UUID,
  waktuMasuk: string,
  waktuPulang: string
};

export type PresenceForm = {
  nip: string,
  lat: number,
  lng: number,
};

export type FormattedLogPresensiTable = {
  id: string,
  tanggal: string,
  nama?: string,
  waktuMasuk: string,
  waktuPulang: string,
}

export type Position = {
  lat: number,
  lng: number
}

export type LokasiLogPresensiTable = {
  id: string,
  latMasuk: number | null,
  lngMasuk: number | null,
  latPulang: number | null,
  lngPulang: number | null,
}