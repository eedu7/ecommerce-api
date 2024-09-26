import { create } from "zustand";

type AuthTab = "sign-in" | "sign-up";

interface AuthStore {
    currentTab: AuthTab;
    setCurrentTab: (tab: AuthTab) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
    currentTab: "sign-in",
    setCurrentTab: (tab: AuthTab) => {
        if (tab === "sign-in" || tab === "sign-up") {
            set({ currentTab: tab });
        } else {
            throw new Error(`Invalid tab: ${tab}. Only "sign-in" and "sign-up" are allowed.`);
        }
    }
}));

export default useAuthStore;
