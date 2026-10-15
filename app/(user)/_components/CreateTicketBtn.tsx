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
        <div className="fixed top-16 md:top-23 left-0 lg:left-64 right-0 z-20 backdrop-blur-sm py-3 px-4 md:px-15 lg:px-10 flex justify-between items-stretch sm:items-center gap-10 border-b border-border transition-all bg-background">
            <div className="w-full flex items-center justify-between custom-dropdowns">
                <Select
                    defaultValue="digitalBase"
                    options={options}
                    className="w-full sm:w-48 me-10!"
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
        </div>
    );
}
