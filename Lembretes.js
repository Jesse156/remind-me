import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Lembretes extends Component{
    render(){
        return(
            <View key={this.props.keyval} style={styles.lembrete}>
                
                <Text style={styles.lembreteText}>Lembrete do dia: {this.props.val.date}</Text>                
                <Text style={styles.lembreteText}>{this.props.val.lembrete}</Text>
            
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.lembreteDelete}>
                    <Text style={styles.lembreteDeleteText}> X </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    lembrete: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    lembreteText:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#1E90FF'
    },
    lembreteDelete:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,

    },
    lembreteDeleteText:{
        color: 'white'
    }

});

