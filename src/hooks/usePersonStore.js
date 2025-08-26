import { create } from 'zustand'

export const usePersonStore = create((set, get, store) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  reset: () => set(store.getInitialState()),
}))
