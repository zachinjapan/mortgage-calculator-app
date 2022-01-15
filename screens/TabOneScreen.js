import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("");
  const [principal, setPrincipal] = useState("");
  const [annualInterest, setAnnualInterest] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculate = () => {
    // replace commas
    const r = annualInterest.replace(/\,/g, "") / 100 / 12;
    console.log(r);
    const n = years * 12;
    console.log(n);
    const payment =
      (principal.replace(/\,/g, "") * (r * Math.pow(1 + r, n))) /
      (Math.pow(1 + r, n) - 1);
    console.log(payment);
    setMonthlyPayment(payment.toFixed(2));
  };

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
              onChangeText={(text) =>
                setHomePrice(
                  Number(text.replace(/[^0-9]/g, "")).toLocaleString()
                )
              }
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Text style={styles.label}>Principal</Text>
            <TextInput
              label="Principal"
              value={principal}
              onChangeText={(text) =>
                setPrincipal(
                  Number(text.replace(/[^0-9]/g, "")).toLocaleString()
                )
              }
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Text style={styles.label}>Annual Interest</Text>
            <TextInput
              label="Annual Interest"
              value={annualInterest}
              onChangeText={(text) => {
                if (text > 100) {
                  alert("Please enter a number less than 100");
                } else {
                  setAnnualInterest(
                    Number(text.replace(/[^0-9]/g, "")).toLocaleString()
                  );
                }
              }}
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
          <View style={styles.input_box}>
            <Text style={styles.label}>{monthlyPayment}</Text>
          </View>
          <Button mode="contained" onPress={() => calculate()}>
            Calculate
          </Button>
        </View>
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
    alignItems: "flex-start",
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 5,
    padding: 10,
    margin: 20,
    minWidth: 200,
  },
  input_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 5,
    padding: 10,
    // margin: 20,
  },
});
