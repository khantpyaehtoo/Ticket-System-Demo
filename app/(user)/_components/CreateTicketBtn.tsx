import { Button, Select } from "antd";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const options = [
    { label: "Digital Base", value: "digitalBase" },
    { label: "Nail Salon", value: "nailSalon" },
    { label: "Mari", value: "mari" },
];

export default function CreateTicketBtn() {
    return (
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[80%] fixed top-23 z-20 bg-background backdrop-blur-sm py-3 px-4 sm:px-2 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 border-b border-border mb-4 transition-all">
            <Select
                defaultValue="digitalBase"
                options={options}
                className="custom-dropdown w-full sm:w-48"
            />
            <Link href="/user/tickets/create" className="w-full sm:w-auto">
                <Button
                    type="primary"
                    className="createTicketBtn w-full sm:w-auto flex items-center justify-center gap-2 h-10 px-4 font-medium"
                >
                    <PlusCircle size={18} />
                    <span>Create Ticket</span>
                </Button>
            </Link>
        </div>
    );
}
