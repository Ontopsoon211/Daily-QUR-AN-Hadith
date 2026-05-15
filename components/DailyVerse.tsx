import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import { useColorScheme } from './useColorScheme';

export default function DailyVerse() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Static daily verse - in real app, fetch from API
  const verse = {
    text: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
    translation: "Indeed, prayer has been decreed upon the believers a decree of specified times.",
    surah: "An-Nisa (4:103)"
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <Text style={[styles.title, { color: colors.text }]}>Daily Qur'an Verse</Text>
      <Text style={[styles.arabic, { color: colors.tint }]}>{verse.text}</Text>
      <Text style={[styles.translation, { color: colors.text }]}>{verse.translation}</Text>
      <Text style={[styles.surah, { color: colors.accent }]}>{verse.surah}</Text>
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
  arabic: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'System', // In real app, use Arabic font
  },
  translation: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
  surah: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});