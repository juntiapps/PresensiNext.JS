'use client';

import { deleteEmployee } from "@/app/lib/actions";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function UpdateEmployee({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/employees/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function CreateEmployee() {
  return (
    <Link
      href="/dashboard/employees/create"
      className="flex h-10 items-center rounded-lg bg-yellow-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
    >
      <span className="hidden md:block">Tambah Pegawai</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// export function DeleteEmployee({ id }: { id: string }) {
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleClick = useCallback((e: React.MouseEvent) => {
//     const confirmed = window.confirm('Yakin ingin menghapus pegawai ini?');

//     if (!confirmed) {
//       e.preventDefault(); // batalkan submit
//     }
//     // Jika ya, form akan submit seperti biasa
//   }, []);

//   const deleteEmployeeWithId = deleteEmployee.bind(null, id);

//   return (
//     <form action={deleteEmployeeWithId} ref={formRef}>
//       <button type="submit" onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-5" />
//       </button>
//     </form>
//   );
// }
export function DeleteEmployee({ id }: { id: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    const confirmed = window.confirm('Yakin ingin menghapus pegawai ini?');
    if (!confirmed) return;

    startTransition(async () => {
      try {
        await deleteEmployee(id); // ← server action yang fetch DELETE API
        router.refresh();         // ← refresh daftar employee
      } catch (error) {
        console.error('Gagal menghapus:', error);
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}