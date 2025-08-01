// import type {} from "@redux-devtools/extension"; // required for devtools typing
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BreadcrumbState {
  breadcrumb: {
    label: string | null;
    url: string | null;
  }[];
}
export const useBreadcrumbStore = create<BreadcrumbState>()(
  devtools((set) => ({
    breadcrumb: [],
    updateBreadcrumb: (breadcrumb: BreadcrumbState["breadcrumb"]) => set({ breadcrumb }),
  })),
);
