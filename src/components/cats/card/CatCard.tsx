import { useState } from 'react';
import styles from './styles.module.css';
import { Cat } from '../../../types/types.ts';
import Like from '../../../assets/like.svg';
import HoveredLike from '../../../assets/hoveredLike.svg';
import ClickedLike from '../../../assets/clickedLike.svg';

type Props = {
  cat: Cat;
  isFavorite?: boolean;
}

export const CatCard = ({ cat, isFavorite = false }: Props) => {
  const [likeHovered, setLikeHovered] = useState(false);
  const [liked, setLiked] = useState(isFavorite);

  const handleLikeClick = () => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favorites') || '[]');

    if (liked) {
      const updatedFavorites = currentFavorites.filter(
        (favoriteCat: Cat) => favoriteCat.id !== cat.id)
      ;

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...currentFavorites, cat];

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setLiked((state) => !state);
  };

  return (
    <div className={styles.catCard}>
      <img className={styles.catImg} src={cat.url} alt="Cat"/>
      <img
        className={styles.likeImg}
        src={ liked ? ClickedLike : (likeHovered ? HoveredLike : Like) }
        alt="Like icon"
        onClick={handleLikeClick}
        onMouseEnter={() => setLikeHovered(true)}
        onMouseLeave={() => setLikeHovered(false)}
      />
    </div>
  );
};