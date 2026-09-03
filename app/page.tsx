import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userRole = cookieStore.get("user_role")?.value;

    if (!token) {
        redirect("/login");
    }

    switch (userRole) {
        case "ADMIN":
            redirect("/admin");
        case "TECH_TEAM":
            redirect("/team");
        case "USER":
            redirect("/user");
        default:
            redirect("/login");
    }
}
