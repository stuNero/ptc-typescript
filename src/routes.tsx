import type { JSX } from "react";
import StartPage from "./pages/StartPage";
import CollectionPage from "./pages/CollectionPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";

interface Route {
  element: JSX.Element;
  path: string;
  menuLabel?: string;
}

const routes: Route[] = [
  {
    element: <StartPage />,
    path: '/',
    menuLabel: 'Start'
  },
  {
    element: <CollectionPage />,
    path: '/collection',
    menuLabel: 'Collection'
  },
  {
    element: <DetailPage />,
    path: '/details/:cardId'
  },
  {
    element: <NotFoundPage />,
    path: '*'
  }
];

export default routes;