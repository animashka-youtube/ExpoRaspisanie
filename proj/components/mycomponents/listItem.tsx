// import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

// interface ListItemProps {
//   el: {
//     text: string;
//     key: string;
//   };
//   deleteHandler: (key: string) => void;
// }

// export function ListItem({ el, deleteHandler }: ListItemProps) {
//   return (
//     <TouchableOpacity onPress={() => deleteHandler(el.key)}>
//       <Text style={styles.text}>{el.text}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     backgroundColor: "#fefefe",
//     padding: 16,
//     marginTop: 14,
//     width: "90%",
//     marginLeft: "5%",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "purple",
//     color: "#000000",
//   },
// });

// export default ListItem;
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface ListItemProps {
  el: {
    text: string;
    info: string;
  };
}

export function ListItem({ el }: ListItemProps) {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity style={styles.infoContainer}>
        <View>
          <Text style={styles.infoText}>{el.info}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.text}>
        <Text style={{ color: "white", textAlign: "center" }}>{el.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#25003B",
    backgroundColor: "rgba(82, 7, 126, 0.8)",
  },
  infoContainer: {
    width: "30%",
  },
  infoText: {
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
  text: {
    width: "60%",
    textAlign: "center",
    verticalAlign: "middle",
    marginLeft: "5%",
    alignItems: "center",
  },
});

export default ListItem;
