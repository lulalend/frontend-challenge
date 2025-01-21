import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.module.css';

export const Header = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPage = sessionStorage.getItem('currentPage');

    if (storedPage === 'favorites') {
      setIsFavorite(true);
      navigate('/favorites');
    } else {
      setIsFavorite(false);
      navigate('/');
    }
  }, [navigate]);

  const handleAllCats = () => {
    setIsFavorite(false);
    sessionStorage.setItem('currentPage', 'main');
    navigate('/');
  };

  const handleFavoriteCats = () => {
    setIsFavorite(true);
    sessionStorage.setItem('currentPage', 'favorites');
    navigate('/favorites');
  };

  return (
    <header className={styles.header}>
      <div
        className={classNames(styles.section, {
          [styles.activeSection]: !isFavorite,
        })}
        onClick={handleAllCats}
      >
        Все котики
      </div>
      <div
        className={classNames(styles.section, {
          [styles.activeSection]: isFavorite,
        })}
        onClick={handleFavoriteCats}
      >
        Любимые котики
      </div>
    </header>
  );
};