import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const AssetSetting = ({ title, radius, currentColor, colorList, imageList, callback }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} :</Text>
      <View style={styles.row}>
        {Object.values(colorList).map((color, index) =>
          <TouchableOpacity onPress={() => callback(color)} key={index} style={styles.imageContainer}>
            <Image source={imageList[color]} style={styles.image} />
            {currentColor === color ?
              <View style={[styles.selected, { borderRadius: radius }]}>
                <Ionicons name={"md-checkmark-circle"} size={20} color={"green"} style={styles.icon} />
              </View> : null
            }
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center"
  },
  imageContainer: {
    position: "relative"
  },
  image: {
    width: 50,
    height: 50,
  },
  selected: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  icon: {
    padding: 15
  }
});

export default AssetSetting;