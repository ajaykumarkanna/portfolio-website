import React, { useRef, useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Card } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '../ui/carousel';
import type { PortfolioData } from '../../data/portfolio-data';

interface ClientsSectionProps {
  data: PortfolioData;
}

export function ClientsSection({ data }: ClientsSectionProps) {
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
      }, 3000);
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
        <Briefcase className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">Trusted by Leading Organizations</h3>
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
            {data.clients.map((client, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex flex-col items-center justify-center gap-3 w-full">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-24 flex items-center justify-center w-full">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <p className="text-sm text-slate-600 text-center">{client.name}</p>
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