"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CarouselProps {
    children: React.ReactNode[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
    className?: string;
}

export default function Carousel({
    children,
    autoSlide = true,
    autoSlideInterval = 5000,
    className,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (autoSlide && !isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === children.length - 1 ? 0 : prevIndex + 1
                );
            }, autoSlideInterval);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoSlide, autoSlideInterval, isPaused, children.length]);

    const handleMouseEnter = () => {
        setIsPaused(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div
            className={cn("relative w-full", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children.map((child, index) => (
                        <div key={index} className="min-w-full flex-shrink-0">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
                <ChevronLeft className="h-6 w-6 text-slate-800" />
            </button>
            <button
                onClick={goToNext}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
                <ChevronRight className="h-6 w-6 text-slate-800" />
            </button>
        </div>
    );
}

