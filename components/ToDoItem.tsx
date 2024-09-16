// components/TodoItem.js
import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { forwardRef } from 'react';

// Interface for Task object
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const toDoItem = forwardRef<TextInput, { task: Task; deleteTask: (id: number) => void; toggleCompleted: (id: number) => void; editTaskText: (id: number, textEdited: string) => void; }>(function TodoItem(props, ref){
  const { task, deleteTask, toggleCompleted, editTaskText} = props;
  //const [text, onChangeText] = React.useState(task.text);

  return (
    <View style={{flexDirection:'row', marginVertical:'2%'}}>
      <CheckBox style={{flex: 1}}
      //title="Click Here"
      checked={task.completed}
      onPress={() => toggleCompleted(task.id)}
      />
      
        <TextInput ref={ref} multiline={true} scrollEnabled={false}  onChangeText={(newText: string) => editTaskText(task.id, newText)} value={task.text} style={{ paddingRight:'2%',fontSize:18, verticalAlign:'middle', flex:10,textDecorationLine: task.completed ? 'line-through' : 'none' }}>
        </TextInput>
      

      {/* <View style={{flex:1, marginLeft: '3%'}}>
        <Button title="X" onPress={() => deleteTask(task.id)} />
      </View> */}
      <Pressable style={{flex:1, marginLeft: '3%'}} onPress={() => deleteTask(task.id)}>
        <Text style={{color:'#fc9381', verticalAlign:'middle', fontSize: 25, marginTop:'32%'}}> x</Text>
      </Pressable>
      
    </View>
  );
})

export default  toDoItem;