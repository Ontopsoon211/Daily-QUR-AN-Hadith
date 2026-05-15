import Colors from '@/constants/Colors';
import { CalculationMethod, Coordinates, PrayerTimes } from 'adhan';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import { useColorScheme } from './useColorScheme';

export default function PrayerTimesCard() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // Use default location (Mecca)
        const coordinates = new Coordinates(21.4225, 39.8262);
        const date = new Date();
        const params = CalculationMethod.get(CalculationMethod.MuslimWorldLeague);
        const times = new PrayerTimes(coordinates, date, params);
        setPrayerTimes(times);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const coordinates = new Coordinates(location.coords.latitude, location.coords.longitude);
      const date = new Date();
      const params = CalculationMethod.get(CalculationMethod.MuslimWorldLeague);
      const times = new PrayerTimes(coordinates, date, params);
      setPrayerTimes(times);
    })();
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (!prayerTimes) {
    return (
      <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.title, { color: colors.text }]}>Prayer Times</Text>
        <Text style={{ color: colors.text }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <Text style={[styles.title, { color: colors.text }]}>Prayer Times</Text>
      <View style={styles.timesContainer}>
        <View style={styles.timeRow}>
          <Text style={[styles.prayerName, { color: colors.text }]}>Fajr</Text>
          <Text style={[styles.prayerTime, { color: colors.tint }]}>{formatTime(prayerTimes.fajr)}</Text>
        </View>
        <View style={styles.timeRow}>
          <Text style={[styles.prayerName, { color: colors.text }]}>Dhuhr</Text>
          <Text style={[styles.prayerTime, { color: colors.tint }]}>{formatTime(prayerTimes.dhuhr)}</Text>
        </View>
        <View style={styles.timeRow}>
          <Text style={[styles.prayerName, { color: colors.text }]}>Asr</Text>
          <Text style={[styles.prayerTime, { color: colors.tint }]}>{formatTime(prayerTimes.asr)}</Text>
        </View>
        <View style={styles.timeRow}>
          <Text style={[styles.prayerName, { color: colors.text }]}>Maghrib</Text>
          <Text style={[styles.prayerTime, { color: colors.tint }]}>{formatTime(prayerTimes.maghrib)}</Text>
        </View>
        <View style={styles.timeRow}>
          <Text style={[styles.prayerName, { color: colors.text }]}>Isha</Text>
          <Text style={[styles.prayerTime, { color: colors.tint }]}>{formatTime(prayerTimes.isha)}</Text>
        </View>
      </View>
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
    marginBottom: 12,
    textAlign: 'center',
  },
  timesContainer: {
    flexDirection: 'column',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  prayerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  prayerTime: {
    fontSize: 16,
  },
});