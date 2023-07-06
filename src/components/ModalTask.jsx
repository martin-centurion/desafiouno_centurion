import { StyleSheet, Text, View, Modal, Pressable, } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    onPressStatus
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonDone]}
                            onPress={() => onPressStatus(true)}
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNotyet]}
                            onPress={() => onPressStatus(false)}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000"
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        borderRadius: 5,
        padding: 10,
        margin: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#A0BFE0",
    },
    buttonDone: {
        backgroundColor: "#4A55A2",
    },
    buttonNotyet: {
        backgroundColor: "#7895CB",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        fontSize: 18,
        letterSpacing: .5,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: "center",
    },
});