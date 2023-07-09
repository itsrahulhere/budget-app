import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function BudgetList() {
  //   const dataList = [
  //     {name: 'Item 1', plannedAmount: 100, actualAmount: 80},
  //     {name: 'Item 2', plannedAmount: 200, actualAmount: 150},
  //     {name: 'Item 3', plannedAmount: 300, actualAmount: 250},
  //   ];

  const budgetList = useSelector(state => state.reducer);

  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    setDataList(budgetList);
  }, [budgetList]);

  return (
    <View>
      <ScrollView>
        <View style={styles.budgetcontainer}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.header]}>Name</Text>
            <Text style={[styles.cell, styles.header]}>Planned Amount</Text>
            <Text style={[styles.cell, styles.header]}>Actual Amount</Text>
          </View>
          {dataList.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.planned}</Text>
              <Text style={styles.cell}>{item.actual}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  budgetcontainer: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlignVertical: 'center',
    height: 60,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 17,
  },
  header: {
    fontWeight: 'bold',
    height: 60,
  },
});

export default BudgetList;
