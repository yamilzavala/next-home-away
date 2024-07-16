import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
    firstName: z.string().min(2, {message: 'First Name must be at least 2 characters'}),
    lastName: z.string().min(2, {message: 'Last Name must be at least 2 characters'}),
    username: z.string().min(2, {message: 'User Name must be at least 2 characters'}),
})