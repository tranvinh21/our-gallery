'use client';
import { useEffect, useRef } from 'react';
import Heading from './heading';
import gsap from 'gsap';
import { COL_COUNT } from '../../lib/utils';
export interface Image {
  id: number;
  src: string;
  colClass: string;
  rowClass: string;
}

interface LayoutProps {
  images: Image[];
  heading?: string;
  backgroundColor?: string;
}

function Layout({ images, heading, backgroundColor }: LayoutProps) {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (imageRefs.current.length < 0) return;
    imageRefs.current.forEach((item) => {
      const scaleRidirection =
        +item.style.gridColumnStart <= COL_COUNT / 2 ? 1 : 0;
      console.log(scaleRidirection, item.style.gridColumnStart);
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: `top top`,
          end: `bottom top`,
          scrub: true,
          toggleActions: 'play none reverse none',
        },
        scale: 0,
        translateX: scaleRidirection ? -item.offsetWidth : item.offsetWidth,
      });
    });
  }, []);

  return (
    <div
      className='w-full min-h-screen'
      style={{ backgroundColor: backgroundColor }}
    >
      {heading && (
        <div className='fixed z-10 top-0 w-full h-dvh flex items-center justify-center'>
          <Heading heading={heading} />
        </div>
      )}
      {/* 8-column grid with gap */}
      <div className='w-full relative grid grid-cols-8 gap-4 p-4'>
        {images.map((image) => (
          <div
            ref={(el: HTMLDivElement) => {
              addToRefs(el);
            }}
            key={image.id}
            className={`card-item relative col-span-1 row-span-1 aspect-square overflow-hidden rounded-md shadow-md`}
            style={{
              gridColumnStart: `${image.colClass}`,
              gridRowStart: `${image.rowClass}`,
            }}
          >
            <img
              src={image.src}
              alt={`Item ${image.id}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
