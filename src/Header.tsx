import "./Header.css";
// structure of Header

export function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <a href="/">FLASHCARDS</a>
        </div>
        <div>
          <a href="/">Decks</a>
        </div>
        <div>
          <a href="/">LogIn</a>
        </div>
      </div>
    </div>
  );
}
