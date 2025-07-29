'use client';

import {
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { jakarta } from '@/app/ui/fonts';
import { fetchCiCo, fetchEmployees } from '@/app/lib/data';
import { useEffect, useState } from 'react';
import { CardsSkeleton } from '../skeletons';
import { CiCo } from '@/app/lib/definitions';

const iconMap = {
  employees: UserGroupIcon,
};

export default function CardWrapper() {
  const [jumlahPegawai, setJumlahPegawai] = useState<any>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEmployees();
        setJumlahPegawai(data.count);
      } catch (err) {
        console.error('Error loading employees:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <CardsSkeleton />;

  return (

    <Card
      title="Jumlah Pegawai"
      value={jumlahPegawai}
      type="employees"
    />

  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'employees';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${jakarta.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

export function PresensiCard({ ci, co }: { ci?: string, co?: string }) {
  console.log(ci,co)
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex justify-between text-sm md:text-base">
      <div>
        <p className="text-gray-500">Check-in</p>
        <p className="font-semibold text-green-600">{ci}</p>
      </div>
      <div>
        <p className="text-gray-500">Check-out</p>
        <p className="font-semibold text-red-500">{co}</p>
      </div>
    </div>
  )
}