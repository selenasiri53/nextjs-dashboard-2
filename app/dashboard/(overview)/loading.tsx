import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
}

// Since loading.tsx is a higher level than customers/page.tsx and invoices/page.tsx, its applied to those pages too

// loading.tsx will apply to all pages below it: /invoices/page.tsx & /customers/page.tsx
// most commonly used as a placeholder/fallback for companies