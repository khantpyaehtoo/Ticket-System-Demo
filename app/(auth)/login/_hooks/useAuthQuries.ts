import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services/authServices";
import { loginAction } from "@/actions/authAction";

// --- MUTATIONS ---

export const useLoginAccountMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (credentials: {
            email: string;
            password: string;
            remember?: boolean;
        }) => {
            const res = await loginAction(credentials);
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
        },
    });
};

export const useRequestOtpMutation = () => {
    return useMutation({
        mutationFn: authService.requestOtp,
    });
};

export const useVerifyOtpMutation = () => {
    return useMutation({
        mutationFn: authService.verifyOtp,
    });
};

export const useResetPasswordMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: authService.resetPassword,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adminData"] });
        },
    });
};

export const useChangePasswordMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: authService.changePassword,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
        },
    });
};
