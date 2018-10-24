import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class Lembretes extends Component{
    render(){
        return(
            <View key={this.props.keyval} style={styles.lembrete}>
                
                <Text style={styles.lembreteText}>{this.props.val.date}=</Text>                
                <Text style={styles.lembreteText}>{this.props.val.lembrete}</Text>
            
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.lembreteDelete}>
                    <TexT style={lembreteDeleteText}> X </TexT>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },


});

export default Lembretes;