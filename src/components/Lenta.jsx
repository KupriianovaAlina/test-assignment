import cn from 'classnames';
import { getArticles } from '../mock-data'

export const Lenta = () => {

const articlesData = getArticles()

  return (
    <div
      className={cn(
        'bg-[#ECF1F4]',
        'w-full',
        'flex',
        'flex-col',
        'gap-5',
        'p-4',
        'rounded'
      )}
    >
      <p className={cn('text-[#0071B2]', 'font-semibold', 'font-SegoeUI')}>
        Мобильная лента
      </p>
      {articlesData.map((article) => (
        <div
          className={cn(
            'bg-white',
            'h-20',
            'rounded',
            'p-2',
            'flex',
            'gap-3',
            'cursor-pointer'
          )}
        >
          <img
            className={cn('w-16', 'h-16')}
            src={article.img}
            alt='обложка статьи'
          />
          <div>
            <p
              className={cn(
                'font-SegoeUI',
                'font-semibold',
                'text-[9px]',
                'text-[rgba(0,31,51,0.3)]'
              )}
            >
              {article.date}{' '}
              <span className={cn('text-[#32B4FF]')}>
                // {article.category ?? 'Название рубрики'}
              </span>
            </p>
            <p className={cn('font-SegoeUI', 'text-[10px]', 'font-roboto')}>
              {article.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
