import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from './utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={cn('flex', className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href && !item.current ? (
              <Link
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-indigo-600',
                  item.current ? 'text-indigo-600' : 'text-slate-500'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {index === 0 ? <Home className="w-4 h-4 inline mr-1" /> : null}
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  'text-sm font-medium',
                  item.current ? 'text-indigo-600' : 'text-slate-500'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};