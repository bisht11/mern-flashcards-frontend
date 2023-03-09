import { API_URL } from "./config";

// TS specific
export type TDeck = {
  title: string;
  cards: string[];
  _id: string;
};

// requesting sever to get all decks

export async function getDecks(): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks`);
  return response.json();
}
