import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import DatePicker from 'react-native-datepicker';

const Formulario = (props) => {
    const {
        onChangeTitle,
        onChangeDate,
        title,
        date
    } = props;
    return (
        <View style={styles.container}>
            <TextInput
                value={title}
                placeholder="Título"
                style={styles.input}
                onChangeText={onChangeTitle}
            />
            <DatePicker
                date={date}
                mode="datetime"
                placeholder="Fecha"
                format="YYYY-MM-DD HH:mm"
                minDate="2019-01-01"
                maxDate="2030-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={onChangeDate}
            />
            <TouchableHighlight style={styles.button}
                onPress={null}
            >
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80
    },
    input: {
        marginBottom: 5,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3
    },
    button: {
        backgroundColor: "skyblue",
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 5
    },
    buttonText: {
        textAlign: 'center'
    }
})

export default Formulario;