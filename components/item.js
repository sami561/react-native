import { Icon, IconButton } from "@react-native-material/core";
import { StyleSheet, Text, View } from "react-native";

const Item = ({ handelLiked, deleteItem }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon={<Icon name="trash-can" size="20" color="red" />}
          onPress={deleteItem}
        />
        <IconButton
          onPress={handelLiked}
          icon={
            <Icon
              name="star"
              color={data[data.length - 1].liked ? "yellow" : "black"}
              size="20"
            />
          }
        />
      </View>
    </View>
  );
};
export default Item;
const styles = StyleSheet.create({
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
});
