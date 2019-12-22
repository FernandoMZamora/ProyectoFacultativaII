import React, { Component } from 'react';
import {
  Alert,
} from 'react-native';
import Lista from './Lista';

export default class ContenedorLista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayed: false,
      descripcion: '',
      fecha: 'Fecha',
      hora: 'Hora',
      isDateTimePickerVisible: false
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert('Información del evento',item.name);
  }

  togglePicker = () => {
    this.setState({
        displayed: !this.state.displayed
    })
  }

  eventoTxtDescripcion = (descripcion)=> {
    this.setState({
        descripcion: descripcion
    });
  }

  agregarEvento = () => {
    const {data, descripcion, fecha, hora} = this.state;
    data.push({
      id: (data.length+1).toString(),
      color:"#87CEEB",
      name: descripcion,
      tags: [fecha,hora]
    });
    this.setState({
      data: data,
      descripcion: '',
      fecha: fecha,
      hora: hora,
    })
    this.togglePicker();
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState({
        fecha: date.toDateString(),
        hora: date.toLocaleTimeString()
    });
    this.hideDateTimePicker();
  };  

  render() {
    const {data, displayed, descripcion, fecha, hora, isDateTimePickerVisible} = this.state;
    return (
      <Lista
        data={data}
        cardClickEventListener={this.cardClickEventListener}
        displayed={displayed}
        togglePicker={this.togglePicker}
        agregarEvento={this.agregarEvento}
        eventoTxtDescripcion={this.eventoTxtDescripcion}
        descripcion={descripcion}
        fecha={fecha}
        hora={hora}
        isDateTimePickerVisible={isDateTimePickerVisible}
        showDateTimePicker={this.showDateTimePicker}
        hideDateTimePicker={this.hideDateTimePicker}
        handleDatePicked={this.handleDatePicked}
      />
    );
  }
} 