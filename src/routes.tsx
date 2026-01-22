import type { JSX } from "react";
import StartPage from "./pages/StartPage";
import CollectionPage from "./pages/CollectionPage";
interface Route {
  element: JSX.Element;
  path: string;
  menuLabel?: string;
}

const routes: Route[] = [
  { element: <StartPage />, path: '/', menuLabel: 'Start' },
  { element: <CollectionPage />, path: '/', menuLabel: 'Collection' },
];

export default routes;