'use client';
import Heading from './heading';
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
            key={image.id}
            className={`relative col-span-1 row-span-1 aspect-square overflow-hidden rounded-md shadow-md`}
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
