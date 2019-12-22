import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const Lista = (props) =>{

  const {
    data,
    cardClickEventListener,
    displayed,
    togglePicker,
    agregarEvento,
    eventoTxtDescripcion,
    descripcion,
    isDateTimePickerVisible,
    showDateTimePicker,
    hideDateTimePicker,
    handleDatePicked,
    fecha,
    hora,
  } = props;

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={key} style={styles.btnColor}>
          <Text>{tag}</Text>
        </TouchableOpacity>
      );
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <TouchableOpacity style={styles.button} onPress={togglePicker}>
<Text style={styles.textColor}>Agregar evento</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={displayed} animationType={"slide"} transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.textModal}>Ingrese los datos de los eventos</Text>
          <TextInput style={styles.textInput} placeholder='Descripción del evento'
            onChangeText={eventoTxtDescripcion}
            value={descripcion}
          />
          <TouchableOpacity style={styles.btn2} onPress={showDateTimePicker} >
            <Text style={styles.textColor}>{fecha}</Text>
            <Text style={styles.textColor}>{hora}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={handleDatePicked}
            onCancel={hideDateTimePicker}
            mode="datetime"
            placeholder="Fecha"
            format="YYYY-MM-DD HH:mm"
            minDate="2019-01-01"
            maxDate="2030-12-31"
          />
          <TouchableOpacity style={styles.button} onPress={agregarEvento}>
            <Text style={styles.textColor}>Crear evento</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <FlatList 
        style={styles.notificationList}
        data={data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {cardClickEventListener(item)}}>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={[styles.cardContent, styles.tagsContent]}>
                {renderTags(item)}
              </View>
            </TouchableOpacity>
          )
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
  button: {
    backgroundColor: '#6A5ACD',
    width: 280,
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  btn2: {
    backgroundColor: '#87CEEB',
    width: 280,
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  textColor: {
    color: 'white',
    textAlign: 'center'
  },
  modal: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'absolute'
  },
  textModal: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  }
});


export default Lista;