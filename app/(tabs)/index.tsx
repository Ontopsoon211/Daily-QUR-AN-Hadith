import { ScrollView, StyleSheet } from 'react-native';

import DailyVerse from '@/components/DailyVerse';
import HadithSection from '@/components/HadithSection';
import PrayerTimesCard from '@/components/PrayerTimesCard';
import TasbihCounter from '@/components/TasbihCounter';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <DailyVerse />
      <HadithSection />
      <PrayerTimesCard />
      <TasbihCounter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
