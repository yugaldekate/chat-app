"use client"

import { Plus } from "lucide-react"
import { ActionTooltip } from "@/components/action-tooltip"
import { useModal } from "@/hooks/use-modal-store"

export const NavigationAction = () => {
    const { onOpen } = useModal();

    return (
        <div>
            <ActionTooltip side="right" align="center" label="Add a server">
                <button onClick={() => onOpen("createServer")} className="group flex items-center">
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 transition-all group-hover:rounded-[16px] group-hover:bg-emerald-500">
                        <Plus size={25} className="transition text-emerald-500 group-hover:text-white" />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}