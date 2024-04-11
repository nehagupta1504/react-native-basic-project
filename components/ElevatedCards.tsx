import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
         <View style={[styles.card, styles.cardElevated2]}>
            <Text>me</Text>
        </View>
         <View style={[styles.card, styles.cardElevated3]}>
            <Text>to</Text>
        </View>
         <View style={[styles.card, styles.cardElevated4]}>
            <Text>scroll</Text>
        </View>
         <View style={[styles.card, styles.cardElevated5]}>
            <Text>more...</Text>
        </View>
         <View style={[styles.card, styles.cardElevated6]}>
            <Text>😎</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  cardContainer:{
    padding: 10,
    margin: 10,
    flex:1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 4,
    elevation: 5,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardElevated: {
    backgroundColor: 'orange',
  },
  cardElevated2: {
    backgroundColor: 'blue',
  },
  cardElevated3: {
    backgroundColor: 'purple',
  },
  cardElevated4: {
    backgroundColor: 'pink',
  },
  cardElevated5: {
    backgroundColor: 'grey',
  },
  cardElevated6: {
    backgroundColor: 'black',
  },
});

export default ElevatedCards;
