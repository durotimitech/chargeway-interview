import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import CONSTANTS from "../utilities/constants";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
    // console.log(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Phone Number - 09084880043</Text>
        <View style={styles.row}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={"john@doe.com"}
            value={formData.email}
            onChangeText={(e) => handleChange(e, "email")}
            keyboardType={"email-address"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: CONSTANTS.COLORS.primaryLight },
            ]}
            onPress={() => {
              navigation.push("Order History");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Order History
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: CONSTANTS.COLORS.primary }]}
            onPress={() => {
              navigation.push("Payment Methods");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Payment Methods
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: CONSTANTS.COLORS.primary }]}
            onPress={() => {
              ToastAndroid.show("Delete Account!", 1000);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Delete Account
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: CONSTANTS.COLORS.primaryLight },
            ]}
            onPress={() => {
              ToastAndroid.show("Sign Out!", 1000);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
  },
  row: {
    marginVertical: 20,
  },
  input: {
    borderColor: CONSTANTS.COLORS.primary,
    borderWidth: 0.8,
    borderRadius: CONSTANTS.DIMENSIONS.borderRadius,
    padding: CONSTANTS.DIMENSIONS.padding * 0.5,
    marginVertical: 5,
    height: 50,
    width: "100%",
  },
  btn: {
    padding: CONSTANTS.DIMENSIONS.padding * 0.5,
    borderRadius: CONSTANTS.DIMENSIONS.borderRadius,
    borderWidth: 1,
    borderColor: CONSTANTS.COLORS.primary,
    marginVertical: CONSTANTS.DIMENSIONS.padding * 0.5,
    width: "40%",
    alignItems: "center",
  },
});

export default ProfileScreen;
