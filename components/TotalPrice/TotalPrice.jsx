import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { BookContext } from "../../contexts/BookContext";

export function TotalPrice() {
  const { books, currency, setCurrency } = useContext(BookContext);
  const totalPrice = books.reduce((acc, currentBook) => {
    return currentBook.price + acc;
  }, 0);

  return (
    <>
      <Text>
        Prix total : {totalPrice} {currency}
      </Text>
      <TouchableOpacity onPress={() => setCurrency("€")}>
        <Text>Changer en euros</Text>
      </TouchableOpacity>
    </>
  );
}
