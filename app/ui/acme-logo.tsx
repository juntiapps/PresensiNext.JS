import { MapPinIcon } from '@heroicons/react/24/outline';
import { jakarta } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${jakarta.className} flex flex-row items-center leading-none text-red-500`}
    >
      <Image
        src="/icon.png"
        width={50}
        height={50}
        alt="icon"
      />
      {/* <p className="text-[40px]">Presensi Next.JS</p> */}
      <p className="text-[32px] sm:text-[40px] whitespace-nowrap sm:whitespace-normal">
        Presensi Next.JS
      </p>
    </div>
  );
}
