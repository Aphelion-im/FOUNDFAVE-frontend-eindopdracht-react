import { Routes, Route } from 'react-router-dom';
import HeaderMenu from './components/header/Header';
import FooterMenu from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notfound/NotFound';
import SignInRegister from './pages/signinregister/SignInRegister';
import Favorites from './pages/favorites/Favorites';
import HeroDetails from './pages/herodetails/HeroDetails';

export default function App() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in-register" element={<SignInRegister />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterMenu />
    </>
  );
}
