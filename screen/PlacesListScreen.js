import React from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);

    return (
        <FlatList
            data={places}
            renderItem={itemData => (
                <PlaceItem
                    title={itemData.item.title}
                    address={null}
                    image={itemData.item.imageUri}
                    onSelect = {() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        })
                    }}
                />
            )}
        />
    );
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Add Places'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('NewPlace');
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({});
 
export default PlacesListScreen;