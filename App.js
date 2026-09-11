import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [currentModule, setCurrentModule] = useState('home');

  return (
    <SafeAreaView style={styles.container}>
      {currentModule === 'home' && (
        <View style={styles.content}>
          <Text style={styles.title}>تطبيق الطفل التعليمي</Text>
          <TouchableOpacity style={styles.btn} onPress={() => setCurrentModule('coloring')}>
            <Text style={styles.btnText}>قسم التلوين</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setCurrentModule('writing')}>
            <Text style={styles.btnText}>قسم الكتابة</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setCurrentModule('puzzles')}>
            <Text style={styles.btnText}>قسم الألغاز</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentModule !== 'home' && (
        <View style={styles.content}>
          <Text style={styles.title}>
            {currentModule === 'coloring' && 'نافذة التلوين'}
            {currentModule === 'writing' && 'نافذة الكتابة'}
            {currentModule === 'puzzles' && 'نافذة الألغاز'}
          </Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => setCurrentModule('home')}>
            <Text style={styles.btnText}>العودة للرئيسية</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fcff', justifyContent: 'center', alignItems: 'center' },
  content: { width: '80%', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  btn: { backgroundColor: '#4a90e2', padding: 15, width: '100%', borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  backBtn: { backgroundColor: '#e74c3c', padding: 15, width: '100%', borderRadius: 10, alignItems: 'center', marginTop: 30 },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
