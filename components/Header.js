import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Header = ({ onChangeText, text, setData, data }) => {
  const handelAdd = () => {
    console.log("Add new", text);
    setData([...data, { id: data.length, title: text }]);
  };
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={handelAdd} style={styles.button}>
        <Text>Add New</Text>
      </TouchableOpacity>
    </>
  );
};

export default Header;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  button: {
    backgroundColor: "lightgreen",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
