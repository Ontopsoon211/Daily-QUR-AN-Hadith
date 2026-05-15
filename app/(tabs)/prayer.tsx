import { StyleSheet, View } from 'react-native';

import PrayerTimesCard from '@/components/PrayerTimesCard';

export default function PrayerScreen() {
  return (
    <View style={styles.container}>
      <PrayerTimesCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});