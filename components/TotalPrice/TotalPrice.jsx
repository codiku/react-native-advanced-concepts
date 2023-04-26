import { Text } from "react-native";

export function TotalPrice({ books }) {
  const totalPrice = books.reduce((acc, currentBook) => {
    return currentBook.price + acc;
  }, 0);

  return <Text style={{ marginTop: 20 }}>Total price : {totalPrice} €</Text>;
}
