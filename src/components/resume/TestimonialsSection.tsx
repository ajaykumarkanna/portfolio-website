import React, { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card } from '../ui/card';
import type { PortfolioData } from '../../data/portfolio-data';

interface TestimonialsSectionProps {
  data: PortfolioData;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll for testimonials
  useEffect(() => {
    const scrollContainer = testimonialsScrollRef.current;
    if (!scrollContainer || isHovered) return;

    let scrollAmount = 0;
    const scroll = () => {
      if (isHovered) return;
      scrollAmount += 0.5;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 40);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <Quote className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">What People Say</h3>
      </div>
      <div className="overflow-hidden">
        <div 
          ref={testimonialsScrollRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          style={{ scrollBehavior: 'auto' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...data.testimonials, ...data.testimonials].map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-[400px] p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h5 className="text-slate-900 truncate">{testimonial.author}</h5>
                  <p className="text-sm text-slate-600 truncate">{testimonial.role}</p>
                  <p className="text-xs text-slate-500 truncate">{testimonial.company}</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-indigo-200 mb-2" />
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">{testimonial.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}