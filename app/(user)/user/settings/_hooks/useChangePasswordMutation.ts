import { changePasswordAction } from "@/actions/authAction";
import { useMutation } from "@tanstack/react-query";

export const useChangePasswordMutation = () => {
    return useMutation({
        mutationFn: async (data: {
            oldPassword: string;
            newPassword: string;
        }) => {
            return await changePasswordAction(data);
        },
    });
};
