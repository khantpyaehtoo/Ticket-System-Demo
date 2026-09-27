import {
    dehydrate,
    HydrationBoundary,
    noop,
    QueryClient,
    queryOptions,
} from "@tanstack/react-query";
import TicketListClient from "./_components/TicketListTable";
import TicketSectionHeader from "./_components/TicketSectionHeader";

// async function getUsers() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/dashboards/10");
//     if (!res.ok) throw new Error("Failed to fetch users");
//     return res.json();
// }

// export const usersQueryOptions = queryOptions({
//     queryKey: ["users"],
//     queryFn: getUsers,
// });

export default async function TicketPage() {
    const queryClient = new QueryClient();

    // try {
    //     // await queryClient.prefetchQuery(usersQueryOptions).catch(noop);
    // } catch {}
    // 2. Add explicit typing using ColumnsType<TicketType>

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TicketSectionHeader />
            <TicketListClient />
        </HydrationBoundary>
    );
}
