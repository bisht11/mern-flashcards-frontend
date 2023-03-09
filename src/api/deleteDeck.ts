import { API_URL } from "./config";

// requesting server to delete a deck

export async function deleteDeck(deckId: string) {
  await fetch(`${API_URL}/decks/${deckId}`, {
    method: "DELETE",
  });
}
