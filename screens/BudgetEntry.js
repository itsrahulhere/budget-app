import React, {useState, useRef} from 'react';

import {StyleSheet, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-native-material/core';
import {addBudget} from '../redux/action';
import {useDispatch} from 'react-redux';

function BudgetEntry() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [planned, setPlanned] = useState('');
  const [actual, setActual] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  let resetForm = () => {
    setName('');
    setPlanned('');
    setActual('');
  };

  const saveBudget = productDetails => {
    if (
      productDetails.productName != '' &&
      productDetails.plannedAmount != '' &&
      productDetails.actualAmount != ''
    ) {
      // console.warn(productDetails);
      dispatch(addBudget(productDetails));
      resetForm();
    }
    inputRef.current.blur();
  };

  return (
    <View style={styles.container}>
      {/* <Text>BudgetEntry</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={text => setName(text)}
        ref={inputRef}
      />
      <TextInput
        style={styles.input}
        placeholder="Planned Amount"
        value={planned}
        onChangeText={text => setPlanned(text)}
        keyboardType="numeric"
        ref={inputRef}
      />
      <TextInput
        style={styles.input}
        placeholder="Actual Amount"
        value={actual}
        onChangeText={text => setActual(text)}
        keyboardType="numeric"
        ref={inputRef}
      />

      <Button
        title="Save"
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: 'darkviolet',
        }}
        onPress={() => {
          saveBudget({
            name,
            planned,
            actual,
          });
        }}
      />
      <Button
        title="Show Items"
        style={{
          alignSelf: 'center',
          marginTop: 100,
          backgroundColor: 'red',
        }}
        onPress={() => {
          navigation.navigate('BudgetList');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 55,
    fontSize: 18,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 25,
    marginHorizontal: 20,
    paddingHorizontal: 25,
  },
});

export default BudgetEntry;
