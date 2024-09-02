import cn from 'classnames';
import { HeaderLogo, EllipsisIcon, SearchIcon, RingIcon } from '../assets';

export const Header = () => (
  <div
    className={cn('h-[3.75rem]', 'border-b-2', 'border-b-[rgba(0,65,102,0.2)]')}
  >
    <div className={cn('w-[75%]', 'h-full', 'mx-auto', 'flex', 'items-center')}>
      <HeaderLogo className={cn('mr-10')} />
      <p className={cn('font-roboto', 'text-[rgba(0,32,51,0.6)]')}>
        Каталог услуг
      </p>
      <div className={cn('ml-auto', 'flex', 'items-center', 'gap-3')}>
        <button
          className={cn(
            'w-6',
            'h-6',
            'flex',
            'items-center',
            'justify-center',
            'rounded'
          )}
        >
          <SearchIcon />
        </button>
        <button
          className={cn(
            'w-6',
            'h-6',
            'flex',
            'items-center',
            'justify-center',
            'rounded'
          )}
        >
          <RingIcon />
        </button>

        <img
          className={cn('w-8', 'h-8', 'rounded-full')}
          src={'./images/Person.png'}
          alt=''
        />
        <button
          className={cn(
            'w-6',
            'h-6',
            'flex',
            'items-center',
            'justify-center',
            'rounded'
          )}
        >
          <EllipsisIcon />
        </button>
      </div>
    </div>
  </div>
);
