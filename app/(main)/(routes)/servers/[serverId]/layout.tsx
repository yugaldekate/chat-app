import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

import { ServerSidebar } from "@/components/server/server-sidebar";

interface ServerIdLayoutProps{
    children: React.ReactNode ,
    params: { 
        serverId: string
    }
}

const ServerIdLayout = async ({ children, params } : ServerIdLayoutProps ) => {
    const profile = await currentProfile();

    if (!profile) {
        return redirectToSignIn();
    }

    //curently loggedIn user should be the member of this server
    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (!server) {
        return redirect("/");
    }

    return ( 
        <div className="h-full">
            <div className="hidden md:flex flex-col h-full w-60 z-20 fixed left-[72px] inset-y-0">
                <ServerSidebar serverId={params.serverId} />
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    );
}
 
export default ServerIdLayout;