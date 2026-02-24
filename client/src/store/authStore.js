import { create } from "zustand";
import { loginUser, registerUser, getProfile } from "../api/auth.api";

export const useAuthStore = create((set) => ({
	user: null,
	loading: false,

	login: async (data) => {
		set({ loading: true });
		const res = await loginUser(data);

		localStorage.setItem("token", res.data.data.token);

		set({
			user: res.data.data.user,
			loading: false,
		});
	},

	register: async (data) => {
		set({ loading: true });
		const res = await registerUser(data);

		localStorage.setItem("token", res.data.data.token);

		set({
			user: res.data.data.user,
			loading: false,
		});
	},

	fetchProfile: async () => {
		const res = await getProfile();
		set({ user: res.data.data });
	},

	logout: () => {
		localStorage.removeItem("token");
		set({ user: null });
	},
}));
