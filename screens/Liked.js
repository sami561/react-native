import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { FlatList, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../hooks/ContextStore";
import { dark, light } from "../theme/Colors";
import { useContext } from "react";
export default function Liked({ data, setData }) {
  const { isDarkTheme } = useContext(ThemeContext);
  const handelLiked = (item) => {
    console.log("Liked", item);
    const likedData = data.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, liked: !dataItem.liked };
      }
      return dataItem;
    });
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
          onPress={() => handelLiked(item)}
          n
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
      <FlatList
        data={data.filter((item) => item.liked)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
