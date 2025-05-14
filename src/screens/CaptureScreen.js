import React from 'react';
import { View, Text, Button } from 'react-native';

const CaptureScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Capture Screen</Text>
    <Button title="Go to Reports" onPress={() => navigation.navigate('Reports')} />
  </View>
);

export default CaptureScreen;