import { create } from "zustand";

interface UserState {
    imageSrc: string | null;
    setImageSrc: (src: string | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
    imageSrc: null,
    setImageSrc: (src) => set({ imageSrc: src }),
}));
