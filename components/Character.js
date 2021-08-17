import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

const Character = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CharacterDetails", { item })}
    >
      <View style={styles.characterCard}>
        <View>
          <Image style={styles.charachterImage} source={{ uri: item.image }} />
        </View>
        <View style={styles.characterDescription}>
          <View>
            <Text style={styles.characterName}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.characterStatus}>
              Status: {item.status} - {item.species}
            </Text>
          </View>
          <View>
            <Text style={styles.characterStatus}>
              Last known location:
              {(item.location && item.location.name) || "unknown"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const text = {
  color: "#fff",
  marginBottom: 5,
};

const styles = StyleSheet.create({
  characterCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#rgb(45, 50, 53)",
    margin: 10,
  },
  charachterImage: {
    width: 150,
    height: 120,
  },
  characterDescription: {
    flex: 1,
    padding: 10,
  },
  characterName: {
    ...text,
    fontSize: 20,
    fontWeight: "bold",
  },

  characterStatus: {
    ...text,
  },
  characterLocation: {
    ...text,
  },
});

export default Character;
