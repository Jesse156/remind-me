import React, {Component} from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

class Footer extends Component{
    render(){
        return(
            <View style={styles.footer}>
                <TextInput 
                style={styles.textInput}
                placeholder='->Nova anotação'
                placeholderTextColor='#696969'
                underlineColorAndroid='transparent'>
                </TextInput>
            </View>
        );
    }
} 

const styles = StyleSheet.create({

    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput:{
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    }


});

export default Footer;