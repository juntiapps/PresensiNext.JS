'use client'
import { useState } from 'react'
import Table from './table'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/lib/redux/store';
import { setActiveTab } from '@/app/lib/redux/features/activeTabSlice';
import MenuTree from './treeview';

const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'menu_role', label: 'Menu Role' },
]

export default function TabMenu({
    query,
}: {
    query: any;
}) {
    // const [activeTab, setActiveTab] = useState('menu')
    const activeTab = useSelector((state: RootState) => state.activeTab.activeTab);
    // Use useDispatch to get the dispatch function
    const dispatch = useDispatch<AppDispatch>();

    const handleTabClick = (tabId: string) => {
        dispatch(setActiveTab(tabId)); // Dispatch the action to change the active tab
    };


    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex space-x-4 border-b mb-4">
                {tabs?.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`py-2 px-4 border-b-2 font-medium transition-all ${activeTab === tab.id
                            ? 'border-red-500 text-red-600'
                            : 'border-transparent text-gray-500 hover:text-red-600'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white p-4 rounded shadow">
                {activeTab === 'menu' && <Table query={query} />}
                {activeTab === 'menu_role' && <MenuTree/>}
            </div>
        </div>
    )
}
