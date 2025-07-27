// services/pegawaiService.ts (contoh)
import { UUID } from 'crypto';
import prisma from '../lib/prisma'; // Sesuaikan path sesuai lokasi file prisma.ts Anda

// --- CREATE Pegawai ---
export async function createMenu(data: {
  name: string;
  icon: string;
  url: string;
  order: number;
  parentId?: string | null | undefined;
}) {
  console.log(data)
  try {
    const newMenu = await prisma.menu.create({
      data
    });
    return newMenu;
  } catch (error) {
    console.error('Error creating menu:', error);
    throw new Error('Failed to create menu.');
  }
}

export async function getAllMenu() {
  try {
    const result = await prisma.menu.findMany(
      {
        include: {
          parent: {
            select: {
              id: true,
              name: true,
            },
          },
        }

      }
    );
    return result;
  } catch (error) {
    console.error('Error fetching all menu:', error);
    throw new Error('Failed to retrieve menu list.');
  }
}

export async function getMenuById(id: UUID) {
  try {
    const menu = await prisma.menu.findUnique({
      where: { id },
    });
    return menu;
  } catch (error) {
    console.error(`Error fetching menu with ID ${id}:`, error);
    throw new Error('Failed to retrieve menu.');
  }
}

export async function updateMenu(
  id: UUID,
  data: {
    name?: string;
    icon?: string;
    url?: string;
    order?: number;
    parentId?: UUID;
  }
) {
  try {
    const prismaData: any = {
      ...(data.name && { name: data.name }),
      ...(data.icon && { icon: data.icon }),
      ...({ url: data.url }),
      ...(data.order && { order: data.order }),
      ...(data.parentId && { parentId: data.parentId }),
      // ...(data.parentId && {
      //   parent: {
      //     update: {
      //       parent: { connect: { id: data.parentId } },
      //     },
      //   },
      // }
      // ),
    };

    const updatedMenu = await prisma.menu.update({
      where: { id },
      data: prismaData
    });
    return updatedMenu;
  } catch (error) {
    console.error(`Error updating menu with ID ${id}:`, error);
    throw new Error('Failed to update menu.');
  }
}

export async function deleteMenu(id: UUID) {
  try {
    const deletedMenu = await prisma.menu.delete({
      where: { id },
    });
    return deletedMenu;
  } catch (error) {
    console.error(`Error deleting menu with ID ${id}:`, error);
    if (error instanceof Error && error.message.includes('Foreign key constraint failed')) {
      throw new Error('Cannot delete menu because there are associated log presensi records. Please delete log presensi records first.');
    }
    throw new Error('Failed to delete menu.');
  }
}

export async function getMenuTree() {
  const menus = await prisma.menu.findMany({
    where: { parentId: null },
    orderBy: { order: "asc" },
    include: {
      children: {
        orderBy: { order: "asc" },
      },
    },
  });

  return menus;
}