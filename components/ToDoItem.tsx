// components/TodoItem.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

// Interface for Task object
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem(props: { task: Task; deleteTask: (id: number) => void; toggleCompleted: (id: number) => void }){
  const { task, deleteTask, toggleCompleted } = props;

  return (
    <View>
      <CheckBox
      title="Click Here"
      checked={task.completed}
      onPress={() => toggleCompleted(task.id)}
      />
      <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </Text>
      <Button title="X" onPress={() => deleteTask(task.id)} />
    </View>
  );
}