import { create } from "zustand";

export type ModelType = "create server";

interface ModelStore {
  type: ModelType | null;
  isOpen: boolean;
  onOpen: (type: ModelType) => void;
  onClose: () => void;
}

export const useModelStore = create<ModelStore>((set: any) => ({
  type: null,
  isOpen: false,
  onOpen: (type: any) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));
