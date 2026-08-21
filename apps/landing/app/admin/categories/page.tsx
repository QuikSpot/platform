import type { Metadata } from 'next';
import { AdminCategoriesClient } from './admin-categories-client';

// Intentionally unlisted: no nav link anywhere, and kept out of search engines too.
export const metadata: Metadata = {
  title: 'Category Management',
  robots: { index: false, follow: false },
};

export default function AdminCategoriesPage() {
  return <AdminCategoriesClient />;
}
