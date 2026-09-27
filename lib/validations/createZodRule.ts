import { z } from "zod";

/**
 * Helper Function
 * @param schema - Zod Schema (z.object)
 * @param fieldName - Validate Field name
 */

export const createZodRule = <T extends z.ZodRawShape>(
    schema: z.ZodObject<T>,
    fieldName: keyof T,
) => ({
    validator(_: unknown, value: unknown) {
        const fieldSchema = schema.shape[fieldName] as unknown as z.ZodType;

        if (!fieldSchema) {
            return Promise.resolve();
        }

        const result = fieldSchema.safeParse(value);

        if (!result.success) {
            return Promise.reject(new Error(result.error.issues[0]?.message));
        }
        return Promise.resolve();
    },
});
