import { create } from "zustand";

interface ThemeState {
	isDark: boolean;
	setIsDark: (value: boolean) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
	isDark: false,
	setIsDark: (value: boolean) => set( () => ({isDark: value})),
}));

export { useThemeStore };