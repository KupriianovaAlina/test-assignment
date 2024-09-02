import cn from 'classnames';

import { ArrowDownIcon } from '../assets';

export const DownloadButton = () => (
  <button
    className={cn(
      'h-12',
      'bg-[#0078D2]',
      'flex',
      'gap-4',
      'justify-center',
      'items-center',
      'rounded',
      'px-4',
      'w-full'
    )}
  >
    <ArrowDownIcon />
    <p className={cn('font-roboto', 'text-white')}>Скачать каталог услуг</p>
  </button>
);
