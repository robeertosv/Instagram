import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Footer from './components/Footer';
import Body from './components/Body';

export default function App() {
  return (
    <View style={[styles.container, {flex: 1}]}>
      <View style={styles.fixed}>
        <Header />
      </View>

      <Stories />
      <Body />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  }
});