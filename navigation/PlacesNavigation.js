import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import PlacesListScreen from '../screen/PlacesListScreen';
import PlacesDetailsScreen from '../screen/PlacesDetailScreen';
import NewPlacesScreen from '../screen/NewPlaceScreen';
import MapScreen from '../screen/MapScreen';

const PlacesNavigation = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlacesDetailsScreen,
    NewPlace: NewPlacesScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(PlacesNavigation);