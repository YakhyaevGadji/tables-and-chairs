import { AuthPage } from '@/view/auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentication'
};

export default function Page() {
    return <div>
        <AuthPage />
    </div>;
}