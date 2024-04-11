import {View, Text, SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
