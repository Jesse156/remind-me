import React from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Principal from './src/components/Principal';
import Footer from './src/components/Footer';

const App = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Principal />
            <Footer />
            
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    }

});


AppRegistry.registerComponent('spotfy', () => App);
