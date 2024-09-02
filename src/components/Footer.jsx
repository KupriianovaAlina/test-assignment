import cn from 'classnames';

export const Footer = () => (
  <div
    className={cn(
      'h-[3.75rem]',
      'w-full',
      'border-t-2',
      'border-t-[rgba(0,65,102,0.2)]'
    )}
  >
    <div className={cn('w-[75%]', 'h-full', 'mx-auto', 'flex', 'items-center')}>
      <p className={cn('text-xs', 'text-[#002033]')}>
        © 2006-2021, ПАО «Газпром нефть»
      </p>
    </div>
  </div>
);
