import React, { FC, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const PrimaryScreen = () => {
    const [total, setTotal] = useState<string | null>('0');
    const [input, setInput] = useState<string>('');

    const addNumbers = () => {
        // Using a regular expression to find all numbers in the string
        const numbers = input?.match(/\d+/g);

        // If no numbers are found, set value to 0
        if (!numbers) {
            setTotal('0');
        }
        else {

            // Converting the matched strings to numbers and add them
            const sum = numbers.map(Number).reduce((acc, num) => acc + num, 0);

            setTotal(sum.toString());
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>String Calculator</Text>
            <TextInput testID="input-field" onChangeText={(val) => setInput(val)} style={styles.inputField} />
            <Button testID="btn-calculate" onPress={() => addNumbers()} title="Calculate" />
            <Text style={styles.total}>`Sum {total ?? 0}`</Text>
        </View>
    );
}

export default PrimaryScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '80%'
    },
    title: { justifyContent: 'center', fontSize: 16, alignSelf: 'center' },
    inputField: { borderBlockColor: '#000000', borderWidth: 1, marginTop: 12, marginBottom: 12 },
    total: { color: '#000000', marginTop: 12, alignSelf: 'center' }
});