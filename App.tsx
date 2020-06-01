import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantShowDetailScreen from './src/screens/RestaurantShowDetailScreen';
import * as routes from './constants/routes';

const navigator = createStackNavigator({
  [routes.SEARCH_ROUTE]: SearchScreen,
  [routes.DETAIL_ROUTE]: RestaurantShowDetailScreen,
}, {
  initialRouteName: routes.SEARCH_ROUTE,
  defaultNavigationOptions: {
    title: 'Food Search Vienna',
  },
});

export default createAppContainer(navigator);
