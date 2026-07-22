import {
  Car,
  Droplets,
  HardHat,
  Hammer,
  Zap,
  PaintRoller,
  Fan,
  Leaf,
  Sparkles,
  ShieldCheck,
  Laptop,
  Truck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Vehicle Repairs & Services': Car,
  Plumbing: Droplets,
  'Masonry & Construction': HardHat,
  'Carpentry & Woodwork': Hammer,
  'Electrical Work': Zap,
  'Painting & Finishing': PaintRoller,
  'AC & Appliance Repair': Fan,
  'Gardening & Landscaping': Leaf,
  'Cleaning Services': Sparkles,
  'Security & Safety': ShieldCheck,
  'IT & Electronics': Laptop,
  'Moving & Transport': Truck,
};

export function getCategoryIcon(name: string): LucideIcon {
  return CATEGORY_ICONS[name] ?? Wrench;
}
