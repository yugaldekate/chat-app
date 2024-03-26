import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="h-full">
            <div className="hidden md:flex flex-col h-full w-[72px] z-30 fixed left-0 inset-y-0">
                <NavigationSidebar />
            </div>
            <main className="md:pl-[72px] h-full">
                {children}
            </main>
        </div>
    );
}
 
export default MainLayout;