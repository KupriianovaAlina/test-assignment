import cn from 'classnames';
import { useState } from 'react';

import { ArrowLeft, ArrowRight } from '../assets';

import { getSliderData } from '../mock-data';

export const Slider = () => {
  const data = getSliderData();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moveBack = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const moveForward = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <div
      className={cn('w-[80%]', 'h-[416px]', 'rounded', 'relative', 'bg-cover')}
      style={{
        'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${data[currentImageIndex].img})`,
      }}
    >
      <button
        className={cn(
          'absolute',
          'w-8',
          'h-8',
          'flex',
          'pl-[9px]',
          'items-center',
          'z-10',
          'left-4',
          'top-[50%]',
          'rounded-full',
          {
            'bg-white': currentImageIndex !== 0,
            'bg-gray-400 [&_svg]:!fill-gray-600': currentImageIndex === 0,
          }
        )}
        disabled={currentImageIndex === 0}
        onClick={moveBack}
      >
        <ArrowLeft />
      </button>
      <button
        className={cn(
          'absolute',
          'w-8',
          'h-8',
          'flex',
          'pl-[12px]',
          'items-center',
          'z-10',
          'right-4',
          'top-[50%]',
          'rounded-full',
          {
            'bg-white': currentImageIndex !== data.length - 1,
            'bg-gray-400 [&_svg]:!fill-gray-600':
              currentImageIndex === data.length - 1,
          }
        )}
        disabled={currentImageIndex === data.length - 1}
        onClick={moveForward}
      >
        <ArrowRight />
      </button>
      <p
        className={cn(
          'absolute',
          'bottom-4',
          'left-4',
          'text-white',
          'font-SegoeUI',
          'text-3xl',
          'w-[50%]'
        )}
      >
        {data[currentImageIndex].title}
      </p>
      <div className={cn('absolute', 'bottom-6', 'right-6', 'flex', 'gap-3')}>
        {data.map((_, index) => {
          return index === currentImageIndex ? (
            <div
              className={cn('w-6', 'h-2', 'bg-[#10A4FB]', 'rounded-xl')}
            ></div>
          ) : (
            <div
              className={cn('w-2', 'h-2', 'rounded-full', 'bg-white', 'cursor-pointer')}
              onClick={() => setCurrentImageIndex(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
