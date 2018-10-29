import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    
    return (
        <View style ={styles.viewStyle}>
            <Text style ={styles.textStyle}> ReminD ME </Text>  
        </View>
    );
};



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'white'
    },
    viewStyle: {
        height: 60,
        padding: 20,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        elevation: 8
    } 
});

export default Header;