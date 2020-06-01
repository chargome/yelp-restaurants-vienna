import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import { NavigationContext } from 'react-navigation';
import { DETAIL_ROUTE } from '../../constants/routes';

const styles = StyleSheet.create({
  root: {
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

interface Props {
  restaurant: any,
}

const RestaurantDetail: React.FC<Props> = ({ restaurant }) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate(DETAIL_ROUTE, { id: restaurant.id })}
      >
        <Image style={styles.image} source={{ uri: restaurant.image_url }} />
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text>{`${restaurant.rating} stars, ${restaurant.review_count} ratings`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantDetail;
