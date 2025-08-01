import { AppSidebar } from "@/components/AppSidebar";
import { AdminHeader } from "@/components/admin/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AdminHeader />
        <main className="p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
