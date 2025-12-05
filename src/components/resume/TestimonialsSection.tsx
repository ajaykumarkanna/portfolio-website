import React, { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '../ui/carousel';
import type { PortfolioData } from '../../data/portfolio-data';

interface TestimonialsSectionProps {
  data: PortfolioData;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const carouselApiRef = useRef<CarouselApi | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Set up auto-scroll
  useEffect(() => {
    const startAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (carouselApiRef.current && !isHovered) {
          carouselApiRef.current.scrollNext();
        }
      }, 5000);
    };

    if (carouselApiRef.current) {
      startAutoScroll();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  // Track carousel position
  useEffect(() => {
    if (!carouselApiRef.current) return;

    setCount(carouselApiRef.current.scrollSnapList().length);
    setCurrent(carouselApiRef.current.selectedScrollSnap());

    carouselApiRef.current.on('select', () => {
      if (carouselApiRef.current) {
        setCurrent(carouselApiRef.current.selectedScrollSnap());
      }
    });
  }, [carouselApiRef.current]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollTo = (index: number) => {
    carouselApiRef.current?.scrollTo(index);
  };

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <Quote className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">What People Say</h3>
      </div>
      <Card
        className="p-8 bg-gradient-to-r from-slate-50 to-indigo-50/30 border-slate-200 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          setApi={(api) => (carouselApiRef.current = api)}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {data.testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 basis-1/1 md:basis-1/2 lg:basis-1/3 min-w-0 w-400">
                <div className="flex flex-col h-full">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-5">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                        />
                      )}
                      <div className="space-y-1">
                        <h5 className="text-slate-900 font-semibold text-base">{testimonial.author}</h5>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                        <p className="text-xs text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-indigo-200 mb-6 mt-6 flex-shrink-0" />
                    <div className="flex-grow">
                      <p className="text-sm text-slate-600 leading-relaxed mb-2 text-italic">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === current
                ? 'w-8 bg-indigo-600'
                : 'w-2 bg-slate-300 hover:bg-slate-500'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}