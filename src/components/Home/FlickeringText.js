import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

const FlickeringText = ({ style, children }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: Math.random() * 100 + 400, // Randomize duration for a more dynamic effect
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: Math.random() * 100 + 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.Text style={[styles.flickeringText, style, { opacity }]}>
      {children}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  flickeringText: {
    color: '#f6b93b', // Flame-like color
    textShadowColor: '#e55039', // Glow color
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20, // Increase radius for a more pronounced glow
    fontSize: 24, // Adjust font size as needed
    fontWeight: 'bold',
  },
});

export default FlickeringText;
