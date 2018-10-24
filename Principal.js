import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';


class scrollContainer extends Component {
    
    render(){
        return(
            <View style={styles.container}>    
                <ScrollView style={styles.scrollContainer}>
                
                </ScrollView>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100     
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#1E90FF',
        width: 75,
        height: 75,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }

});


export default scrollContainer;