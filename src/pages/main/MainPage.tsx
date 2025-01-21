import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css';
import { useInfCats } from '../../api/cats/useCats.ts';
import { CatCard } from '../../components/cats/card/CatCard.tsx';

export const MainPage = () => {
  const {
    data, isLoading, isFetchingNextPage, fetchNextPage,
  } = useInfCats();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <div className={styles.container}>Загрузка...</div>;
  }

  return (
    <div>
      {data?.pages.map((page, index) => {
        return <div className={styles.container} key={index}>{
          page.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))
        }</div>;
      })}
      <div ref={ref} className={styles.loadMore}>
        {isFetchingNextPage
          ? '...загружаем ещё котиков...'
          : 'больше котиков нет!'}
      </div>
    </div>
  );
};