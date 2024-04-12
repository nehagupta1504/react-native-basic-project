import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View>
          <Image
            source={{
              uri: 'https://shorturl.at/bejx8',
            }}
            style={styles.cardImage}
          />
          <View style={styles.footerContainer} >
            <TouchableOpacity onPress={() => openWebsite('https://shorturl.at/bejx8')}>
              <Text>Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  card: {},
  elevatedCard: {},
  cardImage: {
    height: 100,
    width: 200,
  },
  footerContainer:{}
});
