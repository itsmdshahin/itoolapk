import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

const appsData = [
  {
    key: '1',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.1',
  },
  {
    key: '2',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.2',
  },
  {
    key: '3',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.2',
  },
  {
    key: '4',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.2',
  },
  {
    key: '5',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.2',
  },
  {
    key: '6',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.2',
  },
  {
    key: '7',
    name: 'WhatsApp Messenger',
    image: 'path-to-whatsapp-image',
    downloadUrl: 'https://d.apkpure.com/b/APK/com.android.chrome?version=latest',
    rating: '8.2',
  },
  // Add other apps following the same structure
];

const openDownloadLink = (downloadUrl) => {
  Linking.openURL(downloadUrl).catch((err) => console.error('An error occurred', err));
};

const AppIcon = ({ name, image, rating, downloadUrl }) => (
  <TouchableOpacity style={styles.appContainer} onPress={() => openDownloadLink(downloadUrl)}>
    <Image source={{ uri: image }} style={styles.appIcon} />
    <Text style={styles.appName}>{name}</Text>
    <Text style={styles.appRating}>{rating}</Text>
    <Text style={styles.downloadButton}>Download</Text>
  </TouchableOpacity>
);

const AllApps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Apps In Last 24 Hours</Text>
      <FlatList
        data={appsData}
        renderItem={({ item }) => (
          <AppIcon name={item.name} image={item.image} rating={item.rating} downloadUrl={item.downloadUrl} />
        )}
        numColumns={3}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default AllApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  appContainer: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  appIcon: {
    width: 80,
    height: 80,
  },
  appName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  appRating: {
    fontSize: 12,
    color: 'grey',
  },
  downloadButton: {
    marginTop: 10,
    color: '#007bff',
    fontWeight: 'bold',
  },
});
