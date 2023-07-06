import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from 'react-native'
import React from 'react'

const TopBar = ({
    
            input,
            setInput,
            onAddTask

            }) => {
            return (
                <View style={styles.view1}>
                        <TextInput 
                            placeholder='Agregar Tarea'
                            style={styles.input}
                            value={input}
                            onChangeText={setInput}
                        />
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={onAddTask}
                        >
                                <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                </View>
            )
            }

export default TopBar

const styles = StyleSheet.create({
    view1: {
        height: "20%",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 40,
        paddingBottom: 40,
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: "#4A55A2",
        borderBottomWidth: 2,
        color: "#cccccc",
        fontSize: 16
    },
    button: {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
    },
})