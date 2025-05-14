import React from 'react';
import { View, Text, Button } from 'react-native';

const ReportsScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Reports Screen</Text>
    <Button title="Go to Capture" onPress={() => navigation.navigate('Capture')} />
  </View>
);

export default ReportsScreen;