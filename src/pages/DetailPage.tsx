import { useParams } from "react-router-dom";
import type { CardData } from "../Card.tsx";
import { useEffect } from "react";
import { useState } from 'react';


export default function DetailPage() {
  const { cardId } = useParams();
  const [cards, setCards] = useState<CardData[]>([]);
  const [card, setCard] = useState<CardData>();

  async function getPokemonCardsData() {
    const response = await fetch("/data1-1.json");
    const result = await response.json();

    setCards(result);
  }

  useEffect(() => {
    getPokemonCardsData();
  }, []);

  useEffect(() => {
    setCard(cards?.find(card => card.id == cardId));
  }, [cards]);

  return <>
    <h1>Card: {card?.name}</h1>
    <img src={card?.images.large}></img>
    <div id="card-details">

    </div>
  </>;
}