'use server';

import { Resend } from 'resend';
import CustomerConfirmationEmail from '../emails/CustomerConfirmation';
import AdminNotificationEmail from '../emails/AdminNotification';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'support@clearvue.co.in';

export async function submitContactForm(formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!name || !email || !message) {
            return { success: false, error: 'All fields are required' };
        }

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Thank you for contacting ClearVue',
            react: CustomerConfirmationEmail({ name, message }),
        });

        // Send notification email to admin
        await resend.emails.send({
            from: 'ClearVue Website <no-reply@clearvue.co.in>',
            to: ADMIN_EMAIL,
            subject: `New contact form submission from ${name}`,
            react: AdminNotificationEmail({ name, email, message }),
        });

        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            error: "Failed to send your message. Please try again later.",
        };
    }
}
