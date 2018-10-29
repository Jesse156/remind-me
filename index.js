import React, {Component} from 'react';
import { 
    Text, 
    View, 
    AppRegistry, 
    StyleSheet, 
    ScrollView,
    TouchableOpacity,
    TextInput } from 'react-native';

import Header from './src/components/Header';
import Lembretes from './src/components/Lembretes';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lembreteArray: [],
            lembreteText: '',
        }
    }
    
    render(){ 

        let lembretes = this.state.lembreteArray.map((val, key) => {
            return <Lembretes key={key} keyval={key} val={val}
                deleteMethod={ ()=> this.deleteLembrete(key) } />
        });
            
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.scrollContainer}>
                    {lembretes}
                </ScrollView>
                    <TouchableOpacity onPress={this.addLembrete.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                <TextInput 
                style={styles.textInput}
                onChangeText={(lembreteText) => this.setState({lembreteText})}
                value={this.state.lembreteText}
                placeholder='Clique para uma nova anotação'
                placeholderTextColor='#696969'
                underlineColorAndroid='transparent'>
                </TextInput>
            </View>
        );
    }
    addLembrete() {
        if (this.state.lembreteText) {
            var d = new Date();
            this.state.lembreteArray.push({
                'date' : d.getDate() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getFullYear(),
                'lembrete': this.state.lembreteText
            });
            this.setState({ lembreteArray: this.state.lembreteArray})
            this.setState({ lembreteText: '' });
        }
    }

    deleteLembrete(key){
        this.state.lembreteArray.splice(key, 1);
        this.setState({ lembreteArray: this.state.lembreteArray})
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1
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
    },
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

AppRegistry.registerComponent('spotfy', () => App);
