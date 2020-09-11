import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <WebView
          source={{
            uri: 'http://dp.eightbitguy.in',
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
  },
});
export default App;
