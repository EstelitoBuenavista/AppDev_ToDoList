import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import TodoItem from '@/components/ToDoItem';
import { Appearance, useColorScheme } from 'react-native';
import { Divider } from 'react-native-elements';


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([{
    id: Date.now(),
    text: "",
    completed: false,
  }]);
  const [newText, setNewText] = useState<string>("");
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

  function editTaskText(id: number, textEdited: string): void{
    setTasks(tasks.map((task: Task)=>{
        if(task.id === id){
          task.text = textEdited
        }
        return task
      })
    )
  }

  const completedTasks = tasks.filter((task: Task) => task.completed);
  const incompleteTasks = tasks.filter((task: Task) => !task.completed);

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={{marginTop:"15%", paddingHorizontal:"4%"}}> 
          {/* <TextInput
            style={{ padding: 10, borderWidth: 1 }}
            placeholder="Enter a task"
            value={text}
            onChangeText={setText}
          />
          <Button title="Add Task" onPress={addTask} /> */}

          {incompleteTasks.length > 0 && (
            <>
              <Text style={{fontSize:18}}>Incomplete Tasks</Text>
              {incompleteTasks.map((task: Task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  toggleCompleted={toggleCompleted}
                  editTaskText={editTaskText}
                />
              ))}
            </>
          )}
          <Pressable style={{flexDirection:"row"}} onPress={addTask}>
            
              <Text style={{flex:1, textAlign:'center', verticalAlign:'middle',fontSize:18}}> + </Text>
              <Text style={{flex:11, fontSize:18}}>List item</Text>
            

          </Pressable>

          {completedTasks.length > 0 && incompleteTasks.length > 0 && (<Divider style={{backgroundColor:"#b8b9ba", marginVertical:"2%"}}></Divider>)}

          {completedTasks.length > 0 && (
            <>
              
              <Text style={{fontSize:18}}>Completed Tasks</Text>
              {completedTasks.map((task: Task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  toggleCompleted={toggleCompleted}
                  editTaskText={editTaskText}
                />
              ))}
            </>
          )}

        </View>
      </ScrollView>
    </GestureHandlerRootView>
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
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
