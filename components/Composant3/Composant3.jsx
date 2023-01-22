import { BookList } from "../BookList/BookList";
import { TotalPrice } from "../TotalPrice/TotalPrice";

export function Composant3({ books }) {
  return (
    <>
      <BookList books={books} />
      <TotalPrice books={books} />
    </>
  );
}
