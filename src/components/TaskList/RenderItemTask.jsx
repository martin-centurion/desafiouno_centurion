import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={styles.task} key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 300,
        height: 80,
        padding: 20,
        backgroundColor: "#4A55A2",
        marginBottom: 15,
        justifyContent: 'center',
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
        color: "white"
    },
})