import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import axios from 'axios';

const openDownloadLink = (downloadUrl) => {
  Linking.openURL(downloadUrl).catch((err) => console.error('An error occurred', err));
};

const AppIcon = ({ name, image, downloadUrl }) => {
  const formattedName = name.split(' ').slice(0, 4).join(' '); // Limiting to first 4 words

  return (
    <View style={styles.appCard}>
      <Image source={{ uri: image }} style={styles.appIcon} />
      <Text style={styles.appName}>{formattedName}</Text>
      <TouchableOpacity onPress={() => openDownloadLink(downloadUrl)} style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get('https://itoolapk.com/wp-json/wp/v2/posts?per_page=9');
        setApps(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={apps}
        renderItem={({ item }) => (
          <AppIcon
            name={item.title.rendered}
            image={item.uagb_featured_image_src.full[0]}
            downloadUrl={item.link}
          />
        )}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    marginTop: 50,
  },
  appCard: {
    margin: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    width: '30%', // Width for each card, adjusted for three columns
    alignItems: 'center', // Center items horizontally in the card
  },
  appIcon: {
    width: '100%',
    height: 100,
    resizeMode: 'contain', // Ensure the image fits well
  },
  appName: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
    margin: 5,
  },
  downloadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'stretch', // Ensure the button stretches to fit the card
    margin: 5,
  },
  downloadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});