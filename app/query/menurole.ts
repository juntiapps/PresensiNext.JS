import { UUID } from 'crypto';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

export async function addCheckMenuRole(data: {
    menuId: string;
    roleId: string;
}) {
    try {
        const newPeran = await prisma.menuRole.create({
            data: {
                menuId: data.menuId,
                roleId: data.roleId
            }
        });
        return newPeran;
    } catch (error) {
        console.error('Error creating peran:', error);
        throw new Error('Failed to create peran.');
    }
}

export async function delCheckMenuRole(data: {
    menuId: string;
    roleId: string;
}) {
    try {
        const newPeran = await prisma.menuRole.deleteMany({
            where: {
                menuId: data.menuId,
                roleId: data.roleId
            }
        });
        return newPeran;
    } catch (error) {
        console.error('Error creating peran:', error);
        throw new Error('Failed to create peran.');
    }
}

export async function getMenuRole() {
    try {
        const menuRole = await prisma.menuRole.findMany();
        return menuRole;
    } catch (error) {
        console.error('Error get menuRole by role id:', error);
        throw new Error('Failed to get menuRole by role id');
    }
}