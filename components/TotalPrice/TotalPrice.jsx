import { Text } from "react-native";

export function TotalPrice({ books }) {
  const totalPrice = books.reduce((acc, currentBook) => {
    return currentBook.price + acc;
  }, 0);

  return (
    <>
      <Text>Prix total : {totalPrice} euros</Text>
    </>
  );
}
