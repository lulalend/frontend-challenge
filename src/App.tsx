import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage.tsx';
import { Header } from './components/header/Header.tsx';
import { FavoritePage } from './pages/favorites/FavoritePage.tsx';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      {/*<Route path="*" element={<NoMatch />} />*/}
    </Routes>
  </BrowserRouter>
);