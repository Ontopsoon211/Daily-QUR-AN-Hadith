import { StyleSheet, View } from 'react-native';

import TasbihCounter from '@/components/TasbihCounter';

export default function TasbihScreen() {
  return (
    <View style={styles.container}>
      <TasbihCounter />
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
