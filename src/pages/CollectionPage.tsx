import Card from "../Card";
import type { CardData } from "../Card";
import { useState } from 'react';
import Select from '../Select';
import { useEffect } from "react";

export default function CollectionPage() {
  const [filterType, setFilterType] = useState('All');
  const [limit, setLimit] = useState<number | undefined>(10);
  const [cards, setCards] = useState<CardData[]>([]);

  async function getPokemonCardsData() {
    const response = await fetch("/data1-1.json");
    const result = await response.json();

    setCards(result);
  }

  useEffect(() => {
    getPokemonCardsData();
  }, []);

  const cardTypesSet = new Set(
    cards
      ?.map((card) => card.types)
      .flat()
      .filter(type => type !== '' && type)
  );
  const cardTypes = Array.from(cardTypesSet);

  return cards && <>
    <h1>Pokemon kort: </h1>
    <div id="selections">
      <Select {...{
        label: "Type",
        values: ['All'].concat(cardTypes),
        setter: setFilterType
      }} />
      <label htmlFor="limit-input">Limit of max length: {cards.length}:</label>
      <input
        type="number"
        id="limit-input"
        value={limit || ''}
        onChange={(e) => setLimit(e.target.value ? parseInt(e.target.value) : undefined)}
      ></input>
    </div >
    <div id="cards-grid">
      {cards
        .filter(({ types }) => filterType === 'All' || types?.includes(filterType))
        .slice(0, limit)?.map((props, i) => <Card key={i} {...props} />)
      }
    </div>
  </>;
}