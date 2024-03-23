import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const currentProfile = async () => {
    const { userId } = auth(); // auth() for server-side or say backend side

    if (!userId) {
        return null;
    }   

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}