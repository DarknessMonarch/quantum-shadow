import { create } from 'zustand';
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
 isAuth: false,
 isAgent: false,
 toggleAuth: (newIsAgent) => {
   set({ isAuth: true, isAgent: newIsAgent });
 },
 logOut: () => {
   toast.success("You have logged out");
   set({ isAuth: false, isAgent: false });
 },
}));