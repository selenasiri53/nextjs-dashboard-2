import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
}

// Since loading.tsx is a higher level than customers/page.tsx and invoices/page.tsx, its applied to those pages too