import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      <WebView
        source={{ uri: 'https://amategeko-yumuhanda.netlify.app/' }}
        style={styles.webViewStyle}
        startInLoadingState={true}
        onLoad={() => setLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  webViewStyle: {
    flex: 1,
  },
  loadingText: {
    fontSize: 10,
  }
});
