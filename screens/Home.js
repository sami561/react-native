import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import List from "../components/List";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Home({ liked, setLiked }) {
  const [text, onChangeText] = useState("Useless Text");
  const [data, setData] = useState([]);

  const deleteItem = () => {
    console.log("Delete item");
    const deletedData = data.filter((item) => item.id !== data.length - 1);
    setData(deletedData);
  };
  const handelLiked = () => {
    console.log("Liked");
    setLiked(data);
    console.log(liked);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton icon={<Icon name="trash-can" />} />
        <IconButton
          onClick={handelLiked}
          icon={<Icon name="star" style={{ color: "red", width: "10px" }} />}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Header
            onChangeText={onChangeText}
            text={text}
            setData={setData}
            data={data}
          />
        </View>
        <List data={data} Item={Item} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "lightblue",
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
