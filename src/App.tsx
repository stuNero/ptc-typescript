import { useLocation } from 'react-router-dom';
import Card from "./Card";
import Main from "./partials/Main";


export default function App() {
  useLocation();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return <>
    <Main />
  </>;
};