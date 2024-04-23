import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { LandingPage } from './Pages/LandingPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      {/* <ScrollView>  */}
        {/* <LandingPage/> */}
        {/* <SignUpPage/> */}
        <LoginPage/>
      {/* </ScrollView>  */}
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
