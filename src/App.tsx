import useFetchJson from "./utils/useFetchJson";
import Card from "./Card";


let filterWordRaw = "psychic";
let filterWord = filterWordRaw.slice(0, 1).toUpperCase() + filterWordRaw.slice(1);

interface cardImage {
  small: string;
  large: string;
}
export interface CardData {
  name: string;
  price: number;
  stock: number;
  types: string[];
  images: cardImage;
}
export default function App() {
  const cards = useFetchJson<CardData[]>("/data1-1.json");

  return cards && <>
    <h1>Pokemon kort: </h1>

    {cards
      .filter(({ types }) => types?.includes(filterWord))
      ?.map((props, i) => <Card key={i} {...props} />)
    }
  </>;
};