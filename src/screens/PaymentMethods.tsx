import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { paymentMethodsData } from "../utilities/data";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

const PaymentMethods = () => {
  const [PaymentMethods, setPaymentMethods] = useState(paymentMethodsData);

  return (
    <View>
      <FlatList
        data={PaymentMethods}
        keyExtractor={(item: any) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: { id, method, icon } }) => {
          return (
            <TouchableOpacity key={id} style={styles.container}>
              <FontAwesomeIcon name={icon} size={32} />
              <Text>{method}</Text>
            </TouchableOpacity>
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
    backgroundColor: "white",
    width: "20%",
    textAlign: "center",
    padding: 5,
    margin: 10,
  },
});

export default PaymentMethods;
