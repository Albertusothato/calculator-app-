import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // State variables to hold the input values and the result
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  // Function for addition
  const add = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(`${firstNumber} + ${secondNumber} = ${sum}`);
  };

  // Function for subtraction
  const subtract = () => {
    const difference = parseFloat(firstNumber) - parseFloat(secondNumber);
    setResult(`${firstNumber} - ${secondNumber} = ${difference}`);
  };

  // Function for multiplication
  const multiply = () => {
    const product = parseFloat(firstNumber) * parseFloat(secondNumber);
    setResult(`${firstNumber} * ${secondNumber} = ${product}`);
  };

  // Function for division
  const divide = () => {
    const quotient = parseFloat(firstNumber) / parseFloat(secondNumber);
    setResult(`${firstNumber} / ${secondNumber} = ${quotient}`);
  };

  // Function for square root
  const squareRoot = () => {
    const sqrtResult = Math.sqrt(parseFloat(firstNumber));
    setResult(`√${firstNumber} = ${sqrtResult}`);
  };

  // Function for power
  const power = () => {
    const powerResult = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
    setResult(`${firstNumber} ^ ${secondNumber} = ${powerResult}`);
    
  };
  

  return (
    <View style={styles.container}>
      {/* TextInput fields to take inputs from users*/}
      <TextInput
        style={styles.input}
        placeholder="Enter First Number"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={(text) => setFirstNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Second Number"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={(text) => setSecondNumber(text)}
      />

      {/* Buttons for different things dependent on what user whats to do */}
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={add} />
        <Button title="Subtract" onPress={subtract} />
        <Button title="Multiply" onPress={multiply} />
        <Button title="Divide" onPress={divide} />
        <Button title="Square Root" onPress={squareRoot} />
        <Button title="Power" onPress={power} />
          <Button title="Stats" onPress={power} />
      </View>

      {/* TextView to display the result which will occur when buttun is pressed  */}
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}



// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

