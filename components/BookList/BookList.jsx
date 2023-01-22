import { Text } from "react-native";

export function BookList({ books }) {
  return (
    <>
      {books.map((book) => (
        <Text key={book.id}>
          {book.title} - {book.price} - euros
        </Text>
      ))}
    </>
  );
}
