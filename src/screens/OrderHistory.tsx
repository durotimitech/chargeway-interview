import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ordersData } from "../utilities/data";

const OrderHistory = () => {
  const [orders, setOrders] = useState(ordersData);

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item: any) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: { id, created_at, amount, product_title } }) => {
          return (
            <View style={styles.container}>
              <Text>Order #{id}</Text>
              <Text>{product_title}</Text>
              <Text>Ordered on: {created_at}</Text>
              <Text>Price: {amount}</Text>
            </View>
          );
        }}
        pagingEnabled
        decelerationRate={"fast"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 10,
  },
});

export default OrderHistory;
