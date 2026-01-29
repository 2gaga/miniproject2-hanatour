import { create } from 'zustand';
import { packageData, stayData, ticketData } from '../assets/api/data_index';

const useManage = create((set) => ({
    packages: packageData,
    stays: stayData,
    tickets: ticketData,

    selectedIds: [],

    toggleSelect: (id) =>
        set((state) => ({
            selectedIds: state.selectedIds.includes(id)
                ? state.selectedIds.filter((sid) => sid !== id)
                : [...state.selectedIds, id],
        })),

    selectAll: (currentList) =>
        set((state) => {
            const allIds = currentList.map((item) => item.id);
            const isAllSelected = state.selectedIds.length === allIds.length;
            return { selectedIds: isAllSelected ? [] : allIds };
        }),

    deleteSelected: (category) =>
        set((state) => {
            const keyMap = {
                package: 'packages',
                stay: 'stays',
                ticket: 'tickets',
            };
            const key = keyMap[category];

            return {
                [key]: state[key].filter((item) => !state.selectedIds.includes(item.id)),
                selectedIds: [],
            };
        }),
}));

export default useManage;
