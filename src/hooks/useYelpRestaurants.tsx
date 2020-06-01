import React from 'react';

import yelpApi from '../api/Yelp';


const useYelpRestaurants = (term: string) => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    const fetchRestaurants = async () => {
      setErrorMessage('');
      try {
        const res = await yelpApi.get('/search', {
          params: {
            term,
            location: 'vienna',
            limit: 50,
          },
        });
        setRestaurants(res.data.businesses);
      } catch (error) {
        setErrorMessage('Something went wrong');
      }
    };

    setIsFetching(true);
    fetchRestaurants();
    setIsFetching(false);
  }, [term]);

  return {
    restaurants,
    isFetching,
    errorMessage,
  };
};

export default useYelpRestaurants;
