import React from 'react';
import {
  Text, ScrollView,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import useYelpRestaurants from '../hooks/useYelpRestaurants';
import RestaurantList from '../components/RestaurantList';


const SearchScreen: React.FC = () => {
  const [searchTermInput, setSearchTermInput] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const { restaurants, errorMessage } = useYelpRestaurants(searchTerm);

  const submitSearch = () => {
    setSearchTerm(searchTermInput);
  };

  const filterRestaurantsByPriceCategory = (price: '€' | '€€' | '€€€') => (
    restaurants.filter((rest) => rest.price === price)
  );

  return (
    <>
      <SearchBar term={searchTermInput} setTerm={setSearchTermInput} submitTerm={submitSearch} />
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }
      <ScrollView>
        <RestaurantList title="Affordable" results={filterRestaurantsByPriceCategory('€')} />
        <RestaurantList title="Regular" results={filterRestaurantsByPriceCategory('€€')} />
        <RestaurantList title="Expensive" results={filterRestaurantsByPriceCategory('€€€')} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
