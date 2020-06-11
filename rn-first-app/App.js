import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  FlatList, } from 'react-native';

// Custom Components
import GoalItem from './components/goalItem.js'
import GoalInput from './components/goalInput.js';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoal = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  
  const cancelButton = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoal} cancelButton={cancelButton}/>
      <FlatList
        keyExtractor={(item, index) => item.key} 
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem 
            id={itemData.item.key} 
            onDelete={removeGoal} 
            title={itemData.item.value} 
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

});
