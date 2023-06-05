//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const Object_array = () => {
    const [state, setstate] = useState({
        firstname: '',
        lastname: '',
    })
    const [array, setarray] = useState([])

    const changetext = (key, value) => {
        setstate(state => ({ ...state, [key]: value }));
    };
    const submit = () => {
        setarray(prevArray => [...prevArray, state]);
        setstate({ firstname: '', lastname: '' });
    }
    console.log('out', array);
    return (
        <View style={styles.container}>
            {/* <Text>Object_array</Text> */}
            <TextInput placeholder='Enter firstName' value={state.firstname} onChangeText={text => changetext('firstname', text)} />
            <TextInput placeholder='Enter lastName' value={state.lastname} onChangeText={text => changetext('lastname', text)} />
            <TouchableOpacity onPress={submit}>
                <Text>Submit</Text>
            </TouchableOpacity>

            {
                array.map((v, i) => {
                    return (
                        <View>
                            <Text>FirstName: {v.firstname}</Text>
                            <Text>LastName: {v.lastname}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Object_array;
