import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const CharacterDetails = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.characterDetails}>
      <View>
        <Image style={styles.charachterImage} source={{ uri: item.image }} />
      </View>
      <View style={styles.characterDescription}>
        <Text style={styles.charachterName}>{item.name}</Text>
        <Text style={styles.characterStatus}>
          {item.status} - {item.species}
        </Text>
        <Text style={styles.charachterOrigin}>Origin: {item.origin.name}</Text>
        <Text style={styles.charachterLocation}>
          Last known location: {item.location.name}
        </Text>
        <View>
          <Text style={styles.episodes}>Episodes</Text>
          <FlatList
            data={item.episode}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.episode}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const text = {
  color: "#fff",
  marginBottom: 10,
  fontSize: 15,
};

const styles = StyleSheet.create({
  characterDetails: {
    backgroundColor: "rgb(19, 21, 27)",
  },
  charachterImage: {
    width: "100%",
    height: 280,
    position: "center",
    resizeMode: "cover",
  },
  characterDescription: {
    margin: 10,
  },
  charachterName: {
    ...text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  characterStatus: {
    ...text,
    fontSize: 15,
  },
  charachterOrigin: {
    ...text,
  },
  charachterLocation: {
    ...text,
  },
  episodes: {
    ...text,
    fontSize: 24,
  },
  episode: {
    ...text,
  },
});

export default CharacterDetails;
