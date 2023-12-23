import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const BlogCard = ({ title, shortDescription, fullContent, attachmentLink }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(attachmentLink);
        const data = await response.json();
        const imageSrc = data[0]?.source_url || null;
        setImageUrl(imageSrc);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    if (attachmentLink) {
      fetchImage();
    }
  }, [attachmentLink]);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        {expanded ? (
          <Text style={styles.content}>{fullContent}</Text>
        ) : (
          <Text style={styles.shortDescription}>{shortDescription}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shortDescription: {
    marginTop: 10,
  },
  content: {
    marginTop: 10,
    color: 'gray',
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 8,
  },
});

export default BlogCard;
