import { BookList, Component4 } from "../BookList/BookList";
import { TotalPrice } from "../TotalPrice/TotalPrice";

export function Component3({ books }) {
  return (
    <>
      <BookList books={books} />

      <TotalPrice books={books} />
    </>
  );
}
