'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import ClientDashboardComponent from "./ClientDashboardComponent";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/");
    }
    return <ClientDashboardComponent session={session} />
}