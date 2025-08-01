'use client';

import { fetchLinks } from '@/app/lib/data';
import { LinkList } from '@/app/lib/definitions';
// import icons from '@/app/lib/icon';
import * as icons from "@heroicons/react/24/outline";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// const links = [
//   { name: 'Home', href: '/dashboard', icon: HomeIcon },
//   { name: 'Daftar Pegawai', href: '/dashboard/employees', icon: UserGroupIcon },
//   { name: 'Master Menu', href: '/dashboard/master-menu', icon: UserGroupIcon },
// ];

export default function NavLinks({ roleId }: { roleId: string }) {
  const [links, setLink] = useState([] as LinkList[])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const loadData = async () => {
      try {
        const [par] = await Promise.all([
          fetchLinks(roleId),
        ]);
        setLink(par);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-2">
        {/* Basic Skeleton for top-level links */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-[48px] bg-gray-100 rounded-md animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <MenuItem link={link} key={link.id} />
        );
      })}
    </>
  );
}

const MenuItem = ({ link }: { link: LinkList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const Icon = icons[link.icon as keyof typeof icons];
  const router = useRouter()
  const pathname = usePathname();

  const hasChildren = link.children && link.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    } else {
      router.push(link.href)
    }
  }
  const isActive = pathname === link.href && !hasChildren;

  return (
    <>
      <div
        onClick={handleClick}
        className={`
          flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium
         hover:bg-yellow-600 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3
          ${isActive ? 'bg-yellow-600 text-red-600' : 'bg-gray-50 text-gray-700'}
          ${hasChildren ? 'cursor-pointer' : ''}
         `}>
        <Icon className="w-6" />
        <p className="hidden md:block">{link.name}</p>
        {hasChildren && (
          <span className="ml-auto md:mr-2 text-gray-500 group-hover:text-red-600">
            {isOpen ? '▼' : '▶'} {/* Indicator for expandable menus */}
          </span>
        )}
      </div>
      {isOpen && hasChildren && (
        <div className="ml-4 border-l border-gray-200 pl-2">
          {link.children?.map((child) => (
            <MenuItem
              key={child.id}
              link={child}
            />
          ))}
        </div>
      )}
    </>
  )
}