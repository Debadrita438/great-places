import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesAction from '../store/placesAction';

const NewPlaceScreen = props => {
    const[title, setTitle] = useState('');
    const dispatch = useDispatch();

    const tiltleChangeHandler = text => {
        setTitle(text);
    }

    const savePlaceHandler = () => {
        dispatch(placesAction.addPlace(title));
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