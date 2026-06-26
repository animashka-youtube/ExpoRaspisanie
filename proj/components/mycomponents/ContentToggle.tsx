import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import { FlatList } from "react-native";

const ContentToggle = () => {
  const [isFirstContentVisible, setIsFirstContentVisible] = useState(true);

  const toggleContent = () => {
    setIsFirstContentVisible((prev) => !prev);
  };

  const [listsOfItems, setListsOfItems] = useState([
    {
      id: "1",
      items: [
        {
          text: "Основы разработки приложений",
          info: "12:25-13:45, каб 3302",
        },
        {
          text: "Вычислительная математика",
          info: "14:25-15:45, каб 3307",
        },
        { text: "Цифровая фотография", info: "16:05-17:25, каб 3308" },
      ],
    },
    {
      id: "2",
      items: [
        { text: "Clo3D", info: "9:15-10:35, дист" },
        { text: "История искусств", info: "10:50-12:10, дист" },
        { text: "Дискретная математика", info: "12:25-13:45, дист" },
      ],
    },
    {
      id: "3",
      items: [
        {
          text: "Методы и средства проектирования",
          info: "14:25-15:45, каб 3203",
        },
        { text: "Clo3D", info: "16:05-17:25, каб 3207" },
        { text: "Компьютерная графика", info: "17:40-19:00, каб 3320" },
      ],
    },
    {
      id: "4",
      items: [
        {
          text: "Искусственный интеллект, лекция",
          info: "9:55-11:30, каб 1223",
        },
        {
          text: "Искусственный интеллект, практика",
          info: "11:30-13:45, каб 1223",
        },
      ],
    },
    {
      id: "5",
      items: [
        { text: "Вычислительная математика", info: "9:15-10:35, дист" },
        {
          text: "Основы разработки приложений",
          info: "9:15-10:35, дист",
        },
      ],
    },
    {
      id: "6",
      items: [
        {
          text: "Дискретная математика",
          info: "14:25-15:45, каб 3302",
        },
        {
          text: "Дискретная математика",
          info: "16:05-17:25, каб 3302",
        },
        { text: "Цифровая фотография", info: "17:40-19:00, каб 3308" },
      ],
    },
    {
      id: "7",
      items: [
        { text: "Clo3D", info: "9:15-10:35, дист" },
        { text: "Компьютерная графика", info: "10:50-12:10, дист" },
        { text: "Дискретная математика", info: "12:25-13:45, дист" },
      ],
    },
    {
      id: "8",
      items: [
        {
          text: "История искусств",
          info: "12:00-13:30, музей",
        },
        {
          text: "Методы и средства проектирования",
          info: "14:25-15:45, каб 3203",
        },
        { text: "Компьютерная графика", info: "16:05-17:25, каб 3320" },
        { text: "Компьютерная графика", info: "17:40-19:00, каб 3320" },
      ],
    },
    {
      id: "9",
      items: [
        {
          text: "Искусственный интеллект, лекция",
          info: "9:55-11:30, каб 1223",
        },
        {
          text: "Искусственный интеллект, практика",
          info: "11:30-13:45, каб 1223",
        },
      ],
    },
    {
      id: "10",
      items: [
        { text: "Вычислительная математика", info: "9:15-10:35, дист" },
        {
          text: "Основы разработки приложений",
          info: "9:15-10:35, дист",
        },
      ],
    },
  ]);

  const updateItem = (
    listId: string,
    Index: number,
    field: string,
    value: string
  ) => {
    setListsOfItems((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              items: list.items.map((item, idx) =>
                idx === Index ? { ...item, [field]: value } : item
              ),
            }
          : list
      )
    );
  };

  const [height, setHeight] = useState(37); // Начальная высота

  const handleContentSizeChange = (
    _contentWidth: number,
    contentHeight: React.SetStateAction<number>
  ) => {
    setHeight(contentHeight); // Устанавливаем высоту в зависимости от содержимого
  };

  const renderItem = (
    { item, index }: ListRenderItemInfo<{ text: string; info: string }>,
    listId: string
  ) => (
    <View style={styles.listItem}>
      <View style={styles.infoContainer}>
        <TextInput
          style={[
            styles.inputINFO,
            { height: Math.max(30, height) },
            { height: Math.min(70, height) },
          ]} // Ограничиваем минимальную высоту
          multiline={true}
          // numberOfLines={2} // Задает количество видимых линий
          value={item.info}
          textAlignVertical="center"
          onContentSizeChange={(event) =>
            handleContentSizeChange(
              event.nativeEvent.contentSize.width,
              event.nativeEvent.contentSize.height
            )
          }
          onChangeText={(info) => updateItem(listId, index, "info", info)}
        />
      </View>
      <TextInput
        style={[
          styles.inputTEXT,
          { height: Math.max(30, height) },
          { height: Math.min(70, height) },
        ]}
        value={item.text}
        multiline={true}
        textAlignVertical="center"
        onChangeText={(text) => updateItem(listId, index, "text", text)}
      />
    </View>
  );

  // const updateItems = (id, newItems) => {
  //   setListsOfItems((prevLists) =>
  //     prevLists.map((list) =>
  //       list.id === id ? { ...list, items: newItems } : list
  //     )
  //   );
  // };

  // const renderItem = ({ item }) => <ListItem el={item} />;

  const getItemsById = (id: string) => {
    const list = listsOfItems.find((item) => item.id === id);
    return list ? list.items : [];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleContent} style={styles.button}>
        <Text style={styles.buttonText}>
          {isFirstContentVisible ? "Четная неделя" : "Нечетная неделя"}
        </Text>
      </TouchableOpacity>

      {isFirstContentVisible ? (
        <View style={styles.day1}>
          <View>
            <Text style={styles.day}>Понедельник</Text>
            <FlatList
              data={getItemsById("1")}
              renderItem={(props) => renderItem(props, "1")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Вторник</Text>
            <FlatList
              data={getItemsById("2")}
              renderItem={(props) => renderItem(props, "2")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Среда</Text>
            <FlatList
              data={getItemsById("3")}
              renderItem={(props) => renderItem(props, "3")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Четверг</Text>
            <FlatList
              data={getItemsById("4")}
              renderItem={(props) => renderItem(props, "4")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Пятница</Text>
            <FlatList
              data={getItemsById("5")}
              renderItem={(props) => renderItem(props, "5")}
              keyExtractor={(index) => index.toString()}
            />
          </View>
        </View>
      ) : (
        <View style={styles.day}>
          <View>
            <Text style={styles.day1}>Понедельник</Text>
            <FlatList
              data={getItemsById("6")}
              renderItem={(props) => renderItem(props, "6")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Вторник</Text>
            <FlatList
              data={getItemsById("7")}
              renderItem={(props) => renderItem(props, "7")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Среда</Text>
            <FlatList
              data={getItemsById("8")}
              renderItem={(props) => renderItem(props, "8")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Четверг</Text>
            <FlatList
              data={getItemsById("9")}
              renderItem={(props) => renderItem(props, "9")}
              keyExtractor={(index) => index.toString()}
            />
            <Text style={styles.day}>Пятница</Text>
            <FlatList
              data={getItemsById("10")}
              renderItem={(props) => renderItem(props, "10")}
              keyExtractor={(index) => index.toString()}
            />
            {/* <FlatList
              data={getItemsById("10")}
              renderItem={renderItem}
              keyExtractor={(index) => index.toString()}
            /> */}
            {/* <FlatList
              data={listOfItems10}
              renderItem={({ item }) => <ListItem el={item} />}
            /> */}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  day: {
    fontSize: 16,
    fontFamily: "AGKornelia",
    fontWeight: "bold",
    color: "#C5A0FF",
    marginLeft: "0.5%",
    marginTop: "8%",
  },
  day1: {
    fontSize: 16,
    fontFamily: "AGKornelia",
    fontWeight: "bold",
    color: "#C5A0FF",
    marginLeft: "0.5%",
  },
  button: {
    width: "50%",
    height: 50,
    marginLeft: "25%",
    marginRight: "25%",
    padding: "3%",
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "rgba(82, 7, 126, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  listItem: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    width: "95%",
    marginLeft: "2%",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#25003B",
    backgroundColor: "rgba(82, 7, 126, 0.8)",
  },
  infoContainer: {
    width: "30%",
  },
  inputTEXT: {
    width: "60%",
    textAlign: "center",
    verticalAlign: "middle",
    marginLeft: "5%",
    alignItems: "center",
    color: "white",
  },
  inputINFO: {
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 4,
    paddingLeft: 4,
    color: "white",
    textAlign: "center",
    borderRightWidth: 2,
    borderColor: "#25003B",
    backgroundColor: "rgba(55, 4, 84, 0.6)",
  },
});

export default ContentToggle;
