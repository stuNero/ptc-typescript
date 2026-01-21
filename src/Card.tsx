import type { CardData } from "./App";

export default function Card({ name, price, stock, types, images }: CardData) {
  const altmsg = '${}';
  return <section className="card">
    <div>
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
      <p>Stock: {stock}</p>
      <p>types: {types}</p>
    </div>
    <img src={images.small} alt='Image of a pokemon card'></img>
  </section >;
};  