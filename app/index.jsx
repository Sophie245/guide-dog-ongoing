// index.jsx
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useVoiceNavigation from '../hooks/useVoiceNavigation'; // Import the voice navigation hook

const Index = () => {
  const navigation = useNavigation(); // Get the navigation object

  // Use the custom hook to enable voice navigation
  useVoiceNavigation({
    onNavigate: (route) => navigation.navigate(route), // Handle navigation
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Guide Dog!</Text>
      <Text style={styles.subTitle}>How can we help?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('explore')}
        >
          <Text style={styles.buttonText}>Photo Recognition</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('create')}
        >
          <Text style={styles.buttonText}>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('profile')}
        >
          <Text style={styles.buttonText}>Tutorial</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('misc')}
        >
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the start (top)
    alignItems: 'center',
    paddingTop: 190, // Adjust this value to move buttons up
    backgroundColor: '#fff', // Set background color
  },
  title: {
    fontSize: 24,
    marginBottom: 5, // Decrease margin to bring titles closer
    color: '#000', // Title color
  },
  subTitle: {
    fontSize: 24,
    marginBottom: 20, // Margin below subtitle
    color: '#000', // Subtitle color
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to the next line
    justifyContent: 'center',
    width: '100%', // Ensure it takes full width
  },
  button: {
    backgroundColor: '#000', // Black background for buttons
    borderRadius: 5,
    paddingVertical: 15, // Uniform vertical padding
    margin: 10,
    width: '40%', // Adjust width for two buttons per row
    height: 70, // Fixed height for uniformity
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
    textAlign: 'center', // Center the button text
  },
});

export default Index; // Export the Index component
