import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = async () => {
    if (loading) return; // Prevent multiple simultaneous loads
    setLoading(true);

    try {
      const response = await axios.get(`https://itoolapk.com/wp-json/wp/v2/posts?per_page=10&page=${page}`);
      setBlogs(prevBlogs => [...prevBlogs, ...response.data]);
      if (response.data.length === 0 || response.data.length < 10) {
        setIsLastPage(true); // If no data or less than per_page limit, it's the last page
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLastPage) {
      setPage(prevPage => prevPage + 1);
    }
  };

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
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator size="large" />}
      />
      {isLastPage && <Text> No more blogs to load.</Text>}
    </View>
  );
};

export default Blog;
