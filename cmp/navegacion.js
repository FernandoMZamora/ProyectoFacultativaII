import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Navegacion = (props) => {
    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.containerButton}
            onPress={null}>
                <Text>New</Text>
            </TouchableOpacity>
            <Text style={styles.textCenter}>Remember Me</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "red",
        flexDirection: 'row'
    },
    containerButton: {
        position: 'absolute',
        top: 30,
        zIndex: 1,
        left: 8
    },
    textCenter : {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default Navegacion;