import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.box}></View>
        <View style={styles.title}></View>
      </View>

      <View style={styles.contant}>
        <View style={styles.faixa1}></View>
        <View style={styles.faixa2}></View>
      </View>

      <View style={styles.containerCenter}>
        <View style={styles.centerCol}>
          <View style={styles.boxCenter}></View>
          <View style={styles.boxCenter}></View>
        </View>
        <View style={styles.centerCol}>
          <View style={styles.boxCenter}></View>
          <View style={styles.boxCenter}></View>
        </View>
        <View style={styles.centerCol}>
          <View style={styles.boxCenter}></View>
          <View style={styles.boxCenter}></View>
        </View>
      </View>

      <View style={styles.footer} />
    </View>
  );
}
