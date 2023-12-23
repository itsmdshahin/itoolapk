import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import BlogCard from '../../components/BlogCard/BlogCard'; // Assuming the file is in the same directory

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://itoolapk.com/wp-json/wp/v2/posts');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <BlogCard
            title={item.title.rendered}
            shortDescription={item.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '')}
            fullContent={item.content.rendered.replace(/<\/?[^>]+(>|$)/g, '')}
            attachmentLink={item._links['wp:attachment'][0]?.href}
          />

        )}
      />
    </View>
  );
};

export default Blog;
