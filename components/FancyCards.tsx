import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Wierdest Animals</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://shorturl.at/bejx8',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tiger</Text>
          <Text style={styles.cardLabel}>Animal that runs fast</Text>
          <Text style={styles.cardDescription}>Wild Animal, Stripes over the body</Text>
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
  cardContainer: {
    padding: 10,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    width: 200,
    height: 250,
    borderRadius: 4,
    paddingTop:8,
    margin: 8,
    flex:1,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardBody: {
    paddingTop: 4,
    margin: 10,
    flex:1,
    flexGrow:1,
    justifyContent: 'space-around',
  },
  cardImage: {
    height: 120,
    width: 130,
    borderRadius: 4,
  },
  cardTitle: {
    color:'#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardLabel: {
    color:'#000000',
    fontSize: 16,
  },
  cardDescription: {
    color:'#000000',
    fontSize: 16,
  },
});

export default FancyCards;
