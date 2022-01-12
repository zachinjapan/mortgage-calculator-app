import { StyleSheet } from "react-native";
import React, { useState } from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { TextInput } from "react-native-gesture-handler";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [annualInterest, setAnnualInterest] = useState(0);
  const [years, setYears] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputs}>
          <Text style={styles.title}>Mortgage Calculator</Text>
          <View style={styles.input_box}>
            <Text style={styles.label}>Home Price</Text>
            <TextInput
              label="Home Price"
              value={homePrice}
              onChangeText={(text) => setHomePrice(text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Text style={styles.label}>Principal</Text>
            <TextInput
              label="Principal"
              value={`${principal} $`}
              onChangeText={(text) => setPrincipal(text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Text style={styles.label}>Annual Interest</Text>
            <TextInput
              label="Annual Interest"
              value={annualInterest}
              onChangeText={(text) => setAnnualInterest(text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Text style={styles.label}>Years</Text>
            <TextInput
              label="Years"
              value={years}
              onChangeText={(text) => setYears(text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>
        <Text>
          Monthly Payment:{" "}
          {(
            ((principal * (annualInterest / 100)) / 12) *
            (1 - Math.pow(1 + annualInterest / 100 / 12, -12 * years))
          ).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  input_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
});
