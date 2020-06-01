import React from 'react';
import {
  StyleSheet, View, Text, FlatList,
} from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

interface Props {
  results: any[],
  title: string,
}

const RestaurantList: React.FC<Props> = ({ results, title }) => (
  results.length ? (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RestaurantDetail restaurant={item} />
        )}
      />
    </View>
  ) : null
);

export default RestaurantList;
