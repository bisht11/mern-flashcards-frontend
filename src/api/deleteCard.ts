import { API_URL } from "./config";
import { TDeck } from "./getDecks";

// requesting server to delete a card

export async function deleteCard(
  deckId: string,
  index: number
): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
    method: "DELETE",
  });
  return response.json();
}
