// components/MenuTree.tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmployeesTableSkeleton } from "../skeletons";
import type { MenuTree, RoleField } from "@/app/lib/definitions";
import { fetchMenuTree, fetchRoles } from "@/app/lib/data";
// import icons from "@/app/lib/icon";
import * as icons from "@heroicons/react/24/outline";

import { addMenuRole, deleteMenuRole } from "@/app/lib/actions";

interface MenuItemProps {
    menu: MenuTree;
    currentRoleId: string; // Prop untuk roleId yang sedang diedit
    // Callback function untuk menangani perubahan checkbox
    onToggleMenuRole: (menuId: string, isChecked: boolean) => void;
}
function MenuItem({ menu, currentRoleId, onToggleMenuRole }: MenuItemProps) {
    const [isOpen, setIsOpen] = useState(true);
    const Icon = icons[menu.icon as keyof typeof icons];
    const [isChecked, setIsChecked] = useState(menu.hasRole || false);
    const [isToggling, setIsToggling] = useState(false); // Untuk menunjukkan loading saat toggle
    // Ini penting jika Anda memuat ulang data menu setelah operasi
    useEffect(() => {
        setIsChecked(menu.hasRole || false);
    }, [menu.hasRole]);

    const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckedState = event.target.checked;
        setIsChecked(newCheckedState); // Update UI immediately

        setIsToggling(true); // Mulai loading
        try {
            await onToggleMenuRole(menu.id, newCheckedState);
        } catch (error) {
            console.error('Failed to toggle menu role:', error);
            setIsChecked(!newCheckedState); // Rollback UI if API fails
            // Tampilkan notifikasi error ke user jika diperlukan
        } finally {
            setIsToggling(false); // Selesai loading
        }
    };

    return (
        <li className="ml-2">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 rounded"
            >
                {/* <span>{menu.children?.length > 0 ? (isOpen ? "▼" : "▶") : "•"}</span> */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        // Disabel checkbox saat sedang toggle API atau saat loading utama
                        disabled={isToggling}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer"
                        // Stop propagation agar klik checkbox tidak memicu toggle isOpen
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
                <span className="font-medium"><Icon className="w-6" /></span>
                <span className="font-medium">{menu.name}</span>
            </div>

            {isOpen && menu.children?.length > 0 && (
                <ul className="ml-4 border-l border-gray-300 pl-2">
                    {menu.children?.map((child) => (
                        <MenuItem
                            key={child.id}
                            menu={child}
                            currentRoleId={currentRoleId}
                            onToggleMenuRole={onToggleMenuRole}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function MenuTree() {

    const [menus, setMenus] = useState<MenuTree[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentRoleId, setCurrentRoleId] = useState<string>("")
    const [roles, setRoles] = useState([] as RoleField[]);

    // const [action, setAction] = useState(1);
    const updateMenuHasRole = useCallback((menuId: string, newHasRole: boolean) => {
        setMenus(prevMenus => {
            const updateChildren = (items: MenuTree[]): MenuTree[] => {
                return items.map(item => {
                    if (item.id === menuId) {
                        return { ...item, hasRole: newHasRole };
                    }
                    if (item.children && item.children.length > 0) {
                        return { ...item, children: updateChildren(item.children) };
                    }
                    return item;
                });
            };
            return updateChildren(prevMenus);
        });
    }, []);


    const handleToggleMenuRole = async (menuId: string, isChecked: boolean) => {
        try {
            if (isChecked) {
                await addMenuRole(menuId, currentRoleId);
            } else {
                await deleteMenuRole(menuId, currentRoleId);
            }
            // Perbarui state 'hasRole' di data 'menus' setelah API berhasil
            updateMenuHasRole(menuId, isChecked);
        } catch (error) {
            console.error("Error toggling menu role:", error);
            throw error; // Lempar error agar MenuItem bisa melakukan rollback
        }
    };

    const handleRoleChange = (event: any) => {
        setCurrentRoleId(event.target.value)
    };

    const loadData = async () => {
        try {
            const data = await fetchMenuTree(currentRoleId);
            // console.log(data[0], 'data')
            if (data.length > 0) {
                setMenus(data);
            }
        } catch (err) {
            console.error('Error loading employees:', err);
        } finally {
            setLoading(false);
        }
    };

    const loadData2 = async () => {
        try {
            const data = await fetchRoles();
            // console.log(data, 'data')
            if (data.length > 0) {
                setRoles(data);
                setCurrentRoleId(data[0].id)
            }
        } catch (err) {
            console.error('Error loading employees:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [currentRoleId]);

    useEffect(() => {
        loadData2();
    }, []);

    if (loading) return <EmployeesTableSkeleton />;
    return (
        <>
            <select
                id="currentRoleId"
                name="currentRoleId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                value={currentRoleId}
                onChange={handleRoleChange}
                aria-describedby="parentId-error"
            >
                {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                        {role.nama}
                    </option>
                ))}
            </select>
            <ul className="text-sm space-y-1">
                {menus.map((menu) => (
                    <MenuItem
                        key={menu.id}
                        menu={menu}
                        currentRoleId={currentRoleId}
                        onToggleMenuRole={handleToggleMenuRole} />
                ))}
            </ul>
        </>

    );
}
