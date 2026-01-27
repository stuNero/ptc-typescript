import { Link } from 'react-router-dom';
interface Image {
  small: string;
  large: string;
}
interface Abilities {
  name: string;
  text: string;
  type: string;
}
interface Attacks {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}
interface Weaknesses {
  type: string;
  value: string;
}
interface Legalities {
  unlimited: string;
}
export interface CardData {
  id: string;
  price: number;
  stock: number;
  name: string;
  superType: string;
  subTypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Abilities[];
  attacks: Attacks[];
  weaknesses: Weaknesses[];
  retreatCost: string[];
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: Image;
}

export default function Card({ name, price, stock, images, id }: CardData) {
  return <section className="card">
    <div>
      <Link to={"/details/" + id} key={id}>
        <img src={images.small} alt={`Image of a ${name} pokemon card`}></img>
        <p>Price: {price}</p>
        <p>Stock: {stock}</p>
      </Link>
    </div>
  </section >;
};