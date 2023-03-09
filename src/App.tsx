import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { deleteDeck } from "./api/deleteDeck";
import { getDecks, TDeck } from "./api/getDecks";
import { createDeck } from "./api/createDeck";

function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  // function to create a deck
  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    // render ot client side
    const deck = await createDeck(title);
    //  set decks
    setDecks([...decks, deck]);
    // clear the title field
    setTitle("");
  }

  // get all decks from DB
  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  // delete a deck
  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  return (
    <div className="container">
      <div className="App">
        <h1>Your Decks</h1>
        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id}>
              <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
              <Link to={`/decks/${deck._id}`}>{deck.title}</Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreate}>
          <label htmlFor="deck-title">Deck Title</label>
          <input
            id="deck-title"
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // controlled form input
              setTitle(e.target.value);
            }}
          />
          <button>Create Deck</button>
        </form>
      </div>
    </div>
  );
}

export default App;
