import React, { useRef, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { Card } from '../ui/card';
import type { PortfolioData } from '../../data/portfolio-data';

interface ClientsSectionProps {
  data: PortfolioData;
}

export function ClientsSection({ data }: ClientsSectionProps) {
  const clientsScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll for clients
  useEffect(() => {
    const scrollContainer = clientsScrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">Trusted by Leading Organizations</h3>
      </div>
      <Card className="p-8 bg-gradient-to-r from-slate-50 to-indigo-50/30 border-slate-200 overflow-hidden">
        <div 
          ref={clientsScrollRef}
          className="flex gap-12 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate clients for seamless loop */}
          {[...data.clients, ...data.clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center gap-3 min-w-[200px]">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-24 flex items-center justify-center w-full">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-sm text-slate-600 text-center">{client.name}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}