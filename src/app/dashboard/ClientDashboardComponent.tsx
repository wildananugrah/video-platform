'use client';

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function ClientDashboardComponent(props: { session: Session }) {
    const { session } = props;
    const { id, name, email } = session.user;
    return (
        <p>
            hello, there {id} {name} {email}
            <button
                className="border rounded-md border-gray-200 p-2 text-sm"
                onClick={(e: any) => signOut({ callbackUrl: "/" })}>Sign out</button>
        </p>
    )
}