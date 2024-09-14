import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import TodoItem from '@/components/ToDoItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [text, setText] = useState<string>('');

  function addTask(): void {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id: number): void {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  }

  function toggleCompleted(id: number): void {
    setTasks(
      tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
        <View>
      <TextInput
        style={{ padding: 10, borderWidth: 1 }}
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Task" onPress={addTask} />
      {tasks.map((task: Task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
