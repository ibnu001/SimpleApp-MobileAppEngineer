import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/RootNavigator';
import store from './src/store';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <AppNavigation />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
