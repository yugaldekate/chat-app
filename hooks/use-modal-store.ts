import { Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "invite";

interface ModalData{
    server?: Server;
}

interface ModalStore {
    isOpen: boolean;
    data: ModalData;
    type: ModalType | null;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    isOpen: false,
    data: {},
    type: null,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ isOpen: false, type: null })
}));
