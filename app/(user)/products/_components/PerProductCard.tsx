import { DetailItem, ProductSpec } from "@/types/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PerProductCardProps {
    detailsList: DetailItem[];
    product: ProductSpec;
}

export default function PerProductCard({
    detailsList,
    product,
}: PerProductCardProps) {
    return (
        <div className="shrink-0 w-full pl-4 md:w-1/2 lg:w-[calc(100%/3)]">
            <Link href={`/products/viewProduct/${product.id}`}>
                <div className="border border-gray-200 shadow-md p-5 rounded-xl flex flex-col justify-between hover:shadow-lg h-full">
                    <div>
                        {/* Header Details */}
                        <div className="flex items-start justify-between">
                            <div className="space-y-1">
                                <p className="font-semibold text-xl">
                                    {product.title}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {product.desc}
                                </p>
                            </div>
                            <div className="border border-gray-300 rounded-2xl px-3 py-1 flex items-center space-x-2">
                                <div
                                    className={`w-2 h-2 rounded-full ${
                                        product.status === "active"
                                            ? "bg-green-500"
                                            : "bg-gray-400"
                                    }`}
                                />
                                <span className="text-sm capitalize">
                                    {product.status}
                                </span>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-52 my-5 rounded-xl overflow-hidden bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Specifications List */}
                        <div className="space-y-3 my-4">
                            {detailsList.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-gray-100 pb-2 text-sm"
                                >
                                    <span className="text-gray-500 font-medium">
                                        {item.label}
                                    </span>
                                    <span className="font-semibold text-gray-800">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                        <button className="w-full border border-dashed border-gray-800 py-3 font-medium shadow-sm flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <span>View Product Ticket</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
