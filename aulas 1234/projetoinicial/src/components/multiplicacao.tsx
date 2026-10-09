import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

import { Botao } from './botao';
import { CampoTexto } from './campo-texto';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';

export function Multiplicacao() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  function multiplicar() {
    if (!valor1.trim() || !valor2.trim() || !valor3.trim()) {
      Alert.alert('Atenção', 'Preencha os três valores.');
      return;
    }

    const a = Number(valor1.replace(',', '.'));
    const b = Number(valor2.replace(',', '.'));
    const c = Number(valor3.replace(',', '.'));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      Alert.alert('Atenção', 'Digite apenas números válidos.');
      return;
    }

    Alert.alert('Multiplicação', `Valor 1: ${a}\nValor 2: ${b}\nValor 3: ${c}\nResultado: ${a * b * c}`);
  }

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="subtitle">Atividade 3</ThemedText>
      <CampoTexto rotulo="Valor 1" value={valor1} onChangeText={setValor1} keyboardType="decimal-pad" />
      <CampoTexto rotulo="Valor 2" value={valor2} onChangeText={setValor2} keyboardType="decimal-pad" />
      <CampoTexto rotulo="Valor 3" value={valor3} onChangeText={setValor3} keyboardType="decimal-pad" />
      <Botao titulo="Multiplicar" onPress={multiplicar} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
});
