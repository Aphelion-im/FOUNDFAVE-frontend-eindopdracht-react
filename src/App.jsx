import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderMenu from './components/header/Header';
import FooterMenu from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notfound/NotFound';
import SignInRegister from './pages/signinregister/SignInRegister';
import FavoritesList from './pages/favorites-list/FavoritesList';
import HeroDetails from './pages/herodetails/HeroDetails';

export default function App() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<HeroDetails />} /> // useParams :id and path="*" don't work well together
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in-register" element={<SignInRegister />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <FooterMenu />
    </>
  );
}
