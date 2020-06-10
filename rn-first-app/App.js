import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView,
  FlatList, } from 'react-native';

// Custom Components
import GoalItem from './components/goalItem.js'
import GoalInput from './components/goalInput.js';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal} />
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
