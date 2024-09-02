import cn from 'classnames';

import { Slider } from './Slider';
import { DownloadButton } from './DownloadButton';

import { Lenta } from './Lenta';

import { getPosts } from '../mock-data';

export const MainLayout = () => {
  const postsData = getPosts();

  return (
    <div className={cn('w-[75%]', 'h-full', 'mx-auto', 'pt-16')}>
      <div className={cn('mb-8', 'flex', 'gap-6')}>
        <Slider />
        <div className={cn('w-64', 'flex', 'flex-col', 'justify-between	')}>
          <Lenta />
          <DownloadButton />
        </div>
      </div>
      <div className={cn('w-[60%]', 'flex', 'flex-col', 'gap-3.5')}>
        {postsData.map((post) => (
          <div className={cn('font-roboto', 'bg-[#ECF1F4]', 'px-3', 'pb-3')}>
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
};
