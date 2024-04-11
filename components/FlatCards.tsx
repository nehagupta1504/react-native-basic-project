import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 4</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 5</Text>
        </View>
      </View>
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
  card:{
    width: 100,
    height: 100,
    borderRadius: 4,
    margin:8,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne:{
    backgroundColor: 'red',
  },
   cardTwo:{
    backgroundColor: 'green',
  },
  cardThree:{
    backgroundColor: 'yellow',
  }
});

export default FlatCards;
