import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";
interface LayoutProps {
    children: ReactNode;
    params: {
        categoryId: string;
    };
}

export default async function Layout({ children, params }: LayoutProps) {
    const { categoryId } = await params;
    return (
        <div className="flex h-full">
            <Sidebar categoryId={categoryId} />
            {children}
        </div>
    );
}