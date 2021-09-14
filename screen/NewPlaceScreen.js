import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesAction from '../store/placesAction';
import ImageSelector from '../components/ImageSelector';
import LocationPicker from '../components/LoacationPicker';

const NewPlaceScreen = props => {
    const[title, setTitle] = useState('');
    const [image, setImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const tiltleChangeHandler = text => {
        setTitle(text);
    }

    const imageTakenHandler = imagePath => {
        setImage(imagePath);
    }

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location)
    }, [])

    const savePlaceHandler = () => {
        dispatch(placesAction.addPlace(title, image, selectedLocation));
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={tiltleChangeHandler}
                    value={title}
                />
                <ImageSelector onImageTaken={imageTakenHandler} />
                <LocationPicker navigation={props.navigation} onLocationPicked={locationPickedHandler} />
                <Button
                    title='Save Place'
                    color={Colors.primary}
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    );
}
NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});
 
export default NewPlaceScreen;