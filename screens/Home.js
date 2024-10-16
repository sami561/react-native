import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import List from "../components/List";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Home({ data, setData }) {
  const [text, onChangeText] = useState("Useless Text");

  const deleteItem = (id) => {
    const deletedData = data.filter((item) => item.id !== id);
    setData(deletedData);
  };

  const handelLiked = (item) => {
    console.log("Liked", item);
    const likedData = data.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, liked: !dataItem.liked };
      }
      return dataItem;
    });
    console.log("🚀 ~ likedData ~ likedData:", likedData);
    setData(likedData);
  };

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon={<Icon name="trash-can" size="20" color="red" />}
          onPress={() => deleteItem(item.id)} // Pass a function that calls deleteItem with the item's id
        />
        <IconButton
          onPress={() => handelLiked(item)} // Wrap handelLiked in an arrow function
          icon={
            <Icon
              name={item.liked ? "star" : "star-outline"} // Adjusted to show outline when not liked
              color={item.liked ? "yellow" : "black"}
              size="20"
            />
          }
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
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
