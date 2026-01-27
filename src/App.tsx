import { useLocation } from 'react-router-dom';
import Header from './partials/Header';
import Main from "./partials/Main";
import Footer from './partials/Footer';


export default function App() {
  useLocation();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return <>
    <Header />
    <Main />
    <Footer />
  </>;
};