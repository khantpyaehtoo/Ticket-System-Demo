import { Button } from "antd";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CreateTicketBtn() {
    return (
        <div className="w-full flex justify-end items-center fixed top-17 sm:top-23 right-5 z-100 bg-background py-4 px-2 sm:px-7">
            <Link href="/user/tickets/create" className="inline-block">
                <Button type="primary" className="createTicketBtn ">
                    <PlusCircle size={20} /> Create Ticket
                </Button>
            </Link>
        </div>
    );
}
