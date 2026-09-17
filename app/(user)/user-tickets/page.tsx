import {
    dehydrate,
    HydrationBoundary,
    noop,
    QueryClient,
    queryOptions,
} from "@tanstack/react-query";
import TicketListClient from "./TicketListClient";

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}

export const usersQueryOptions = queryOptions({
    queryKey: ["users"],
    queryFn: getUsers,
});

export default async function TicketPage() {
    const queryClient = new QueryClient();

    try {
        await queryClient.prefetchQuery(usersQueryOptions).catch(noop);
    } catch {}

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TicketListClient />
        </HydrationBoundary>
    );
}
