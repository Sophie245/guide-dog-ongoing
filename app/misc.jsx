import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Misc = ({ detectionLog }) => { // Accept the detectionLog prop
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detection Log</Text>
      <ScrollView style={styles.logContainer}>
        {detectionLog.map((log, index) => (
          <Text key={index} style={styles.logText}>{log}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logContainer: {
    flex: 1,
    marginTop: 20,
  },
  logText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Misc;
