import Card from "../Card";
import useFetchJson from "../utils/useFetchJson";

let filterWordRaw = "fire";
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
export default function CollectionPage() {
  const cards = useFetchJson<CardData[]>("/data1-1.json");
  return cards && <>
    <h1>Pokemon kort: </h1>
    <div>
      {cards
        .filter(({ types }) => types?.includes(filterWord))
        ?.map((props, i) => <Card key={i} {...props} />)
      }
    </div>
  </>;
}