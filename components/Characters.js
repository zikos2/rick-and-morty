import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import Character from "./character";
import { GetCharacters } from "../queries/GetCharacters";

const Characters = ({ navigation }) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loadCharacters, { called, loading, error }] = useLazyQuery(
    GetCharacters,
    {
      onCompleted: (charachtersData) => {
        setResults([...results, ...charachtersData.characters.results]);
      },
    }
  );

  useEffect(() => {
    loadCharacters({ variables: { page } });
  }, []);

  if (called && error) {
    return <Text>There was an error fetching the data try again</Text>;
  }

  const loadMoreCharacters = () => {
    setPage(page + 1);
    loadCharacters({
      variables: { page: page + 1 },
    });
  };

  return (
    <View style={styles.characters}>
      <View>
        <Text style={styles.title}>Rick and Morty Characters</Text>
      </View>
      {results && (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <Character navigation={navigation} item={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <TouchableOpacity onPress={loadMoreCharacters}>
        <Text style={styles.more}>
          {called && loading ? "loading..." : "Load more"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  characters: {
    backgroundColor: "rgb(19, 21, 27)",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  more: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
});

export default Characters;
