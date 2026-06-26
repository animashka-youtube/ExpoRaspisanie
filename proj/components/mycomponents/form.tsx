import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

interface FormProps {
  addHandler: (task: string) => void;
}

export function Form({ addHandler }: FormProps) {
  const [text, setValue] = useState("");
  const onChange = (text: string) => {
    setValue(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Укажите задачу"
        value={text}
      />
      <View style={styles.button}>
        <Button
          color="purple"
          onPress={() => {
            addHandler(text);
            setValue("");
          }}
          title="Добавить"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 14,
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    padding: 16,
    width: "90%",
    marginLeft: "5%",
    marginTop: 14,
  },
});
export default Form;
