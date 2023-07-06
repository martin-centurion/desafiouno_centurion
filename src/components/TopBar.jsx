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
                            placeholder='Add Task'
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
        paddingBottom: 50,
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: "#8ecae6",
        borderBottomWidth: 3,
        color: "#023047",
        fontSize: 16,
        fontWeight: 'bold'
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