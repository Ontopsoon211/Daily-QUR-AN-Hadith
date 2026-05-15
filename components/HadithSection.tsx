import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import { useColorScheme } from './useColorScheme';

export default function HadithSection() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Static hadith - in real app, fetch from API
  const hadith = {
    text: "The best of you are those who are best to their families, and I am the best of you to my family.",
    narrator: "Narrated by Aisha (ra)",
    source: "Sunan At-Tirmidhi"
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <Text style={[styles.title, { color: colors.text }]}>Authentic Hadith</Text>
      <Text style={[styles.text, { color: colors.text }]}>"{hadith.text}"</Text>
      <Text style={[styles.narrator, { color: colors.accent }]}>{hadith.narrator}</Text>
      <Text style={[styles.source, { color: colors.tint }]}>{hadith.source}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  narrator: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  source: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});