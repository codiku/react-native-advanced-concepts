import { Text } from "react-native";

export function BookList({ books }) {
  return (
    <>
      <Text style={{ marginBottom: 20 }}>Book list</Text>
      {books.map((book) => (
        <Text key={book.id}>
          {book.title} - {book.price}
        </Text>
      ))}
    </>
  );
}
