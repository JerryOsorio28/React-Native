import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  // function that updates state with every keystroke
  const goalHandler = enteredText => {
    setEnteredGoal(enteredText);
  }

  const onAddGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible}animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Course Goal' 
          style={styles.input} 
          onChangeText={goalHandler}
          value={enteredGoal}  
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button 
              title='CANCEL' 
              color='red' 
              onPress={props.cancelButton}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title='ADD' 
              onPress={onAddGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center', 
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    height: 50, 
    width: '90%',
    margin: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  buttons: {
    width: 100,
    height: 50
  }
})

export default GoalInput;