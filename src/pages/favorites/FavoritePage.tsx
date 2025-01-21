import { Cat } from '../../types/types.ts';
import { CatCard } from '../../components/cats/card/CatCard.tsx';
import styles from '../main/styles.module.css';

export const FavoritePage = () => {
  const favorites: Cat[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (!favorites || !favorites.length) {
    return <div className={styles.container}>Никого пока нет :(</div>;
  }

  return (
    <div className={styles.container}>
      {favorites &&
        favorites.length > 0 &&
        favorites.map((cat) =>
          <CatCard key={cat.id} cat={cat} isFavorite={true}/>
        )
      }
    </div>
  );
};