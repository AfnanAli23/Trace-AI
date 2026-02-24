import { create } from "zustand";
import * as api from "../api/bug.api";

export const useBugStore = create((set) => ({
	bugs: [],
	selectedBug: null,
	loading: false,

	fetchBugs: async () => {
		const res = await api.getBugs();
		set({ bugs: res.data.data });
	},

	fetchBug: async (id) => {
		const res = await api.getBugById(id);
		set({ selectedBug: res.data.data });
	},

	createBug: async (data) => {
		await api.createBug(data);
	},
}));
