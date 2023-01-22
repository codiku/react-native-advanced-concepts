import { Text } from "react-native";

export function Composant4({ books }) {
  return (
    <>
      <Text>Liste de livres</Text>
      {books.map((book) => (
        <Text key={book.id}>
          {book.title} - {book.price}
        </Text>
      ))}
    </>
  );
}
