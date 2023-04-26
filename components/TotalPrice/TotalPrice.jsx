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
      <Text style={{ marginTop: 20 }}>
        Total price : {totalPrice} {currency}
      </Text>
      <TouchableOpacity
        onPress={() => setCurrency(currency === "$" ? "€" : "$")}
        style={{ backgroundColor: "cyan", marginTop: 30 }}
      >
        <Text>Toggle currency to {currency === "$" ? "€" : "$"}</Text>
      </TouchableOpacity>
    </>
  );
}
