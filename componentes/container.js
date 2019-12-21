import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, FlatList } from 'react-native';
import Navegacion from './navegacion';
import Formulario from './formulario';
import Lista from './lista';

class Container extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
            title: '',
            date: ''
        }
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
    }
    handleState(items, dataSource){
        this.setState({
            items
        })
    }
    handleAddItems(){
        if(!this.state.title && !this.state.date) return
        const newItems = [
            ... this.state.items,
            {
                key: Date.now(),
                title: this.state.title,
                date: this.state.date,
                notification: false
            }
        ]
        this.handleState(newItems, newItems)
    }
    onChangeTitle(title){
        this.setState({title})
    }
    onChangeDate(date){
        this.setState({date})
    }

    renderItem({ item, index }) {
        return <Text style={style.row}>{item}</Text>;
    }
    render(){
        return (
            <View style={styles.container}>
                <Navegacion />
                <Formulario 
                    onChangeTitle={this.onChangeTitle}
                    onChangeDate={this.onChangeDate}
                />
                <Lista />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f1ed'
    }
})

export default Container;