import React from 'react';
import {
  View, Text, ScrollView, Image, StyleSheet, FlatList,
} from 'react-native';
import { NavigationContext } from 'react-navigation';

import yelp from '../api/Yelp';

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 220,
    borderRadius: 4,
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  head: {
    marginLeft: 15,
    marginTop: 10,
  },
});

const RestaurantShowDetailScreen: React.FC = () => {
  const navigation = React.useContext(NavigationContext);
  const id = navigation.getParam('id');
  const [restaurant, setRestaurant] = React.useState(null);

  React.useEffect(() => {
    const getRestaurant = async (_id: string) => {
      try {
        const resp = await yelp.get(`/${_id}`);
        setRestaurant(resp.data);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    getRestaurant(id);
  }, []);


  return (
    restaurant ? (
      <>
        <View style={styles.head}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text>{restaurant.location.display_address[0]}</Text>
          <Text>{restaurant.location.display_address[1]}</Text>
        </View>
        <ScrollView>
          <FlatList
            data={restaurant.photos}
            showsVerticalScrollIndicator={false}
            keyExtractor={(photo) => photo as string}
            renderItem={({ item }) => {
              const url = item as string;
              return (
                <Image
                  source={{ uri: url }}
                  style={styles.image}
                />
              );
            }}
          />
        </ScrollView>
      </>
    ) : null
  );
};

export default RestaurantShowDetailScreen;
