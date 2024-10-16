import { FlatList, ScrollView, StyleSheet } from "react-native";

export default function List({ data, Item }) {
  return (
    <ScrollView style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    backgroundColor: "red",
  },
});
