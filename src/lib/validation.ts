import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20),
  businessName: z.string().min(2, 'Business name must be at least 2 characters').max(100),
  websiteUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  monthlyBudget: z.string().min(1, 'Please select a budget range'),
  message: z.string().max(1000, 'Message must be less than 1000 characters').optional(),
  honeypot: z.string().max(0).optional(), // Spam protection
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting map (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
}
