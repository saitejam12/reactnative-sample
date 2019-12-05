import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [inputs, setInputs] = useState('');

  const changeInputHandler = e => {
    setInputs(e);
  };
  const todoUpdater = () => {
    setTodo(todoList => [...todoList, inputs]);
  };
  return (
    <View style={styles.mainBox}>
      <View style={styles.container}>
        <TextInput
          placeholder="input Field"
          style={styles.textbox}
          onChangeText={changeInputHandler}
          value={inputs}
        />

        <Button title="Add" onPress={todoUpdater} />
      </View>
      <View style={styles.list}>
        {todo.map((to, index) => (
          <Text key={index} style={styles.listItem}>
            {to}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#ffffee',
    height: '100%',
    paddingVertical: 20,
    marginHorizontal: 10,
  },
  container: {
    paddingTop: 50,
    marginHorizontal: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  textbox: {
    borderBottomColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    width: '60%',
    marginHorizontal: 30,
    marginTop: 10,
    paddingVertical: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
  },
  listItem: {
    marginVertical: 2,
  },
});
