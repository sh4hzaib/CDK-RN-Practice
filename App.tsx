import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";

import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // variable, arrays, objects
  // var name = "TestName";
  const [name, setName] = useState("testing");
  const [counter, setCounter] = useState(0);

  const SayHello = useCallback(
    () => {
      console.log("hello" + name);
      console.log("counter", counter);
    },
    [name, counter]
  );

  const HandleNameChange = useCallback(
    () => {
      setName("Qais");
      setCounter(counter + 1);
      SayHello();
    },
    [setName, setCounter, counter]
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <TextInput
        style={{
          // height: 100,
          width: 200,
          backgroundColor: "gray"
        }}
      /> */}
      <Text>
        {name} {counter}
      </Text>
      <Button title="Hello" onPress={HandleNameChange} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
