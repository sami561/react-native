import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import List from "../components/List";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { dark, light } from "../theme/Colors";
import { ThemeContext } from "../hooks/ContextStore";
export default function Home({ data, setData }) {
  const [text, onChangeText] = useState("Useless Text");
  const { isDarkTheme } = useContext(ThemeContext);

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
    <View
      style={[
        styles.item,
        { borderColor: isDarkTheme ? dark.border : light.border },
      ]}
    >
      <Text
        style={[styles.title, { color: isDarkTheme ? dark.text : light.text }]}
      >
        {item.title}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon={<Icon name="trash-can" size="20" color="red" />}
          onPress={() => deleteItem(item.id)}
        />
        <IconButton
          onPress={() => handelLiked(item)}
          icon={
            <Icon
              name={item.liked ? "star" : "star-outline"}
              color={item.liked ? "yellow" : "black"}
              size="20"
            />
          }
        />
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? dark.background : light.background,
      }}
    >
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
