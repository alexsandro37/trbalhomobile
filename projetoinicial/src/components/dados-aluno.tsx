import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

import { Botao } from './botao';
import { CampoTexto } from './campo-texto';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';

export function DadosAluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  function mostrarMedia() {
    if (!nome.trim() || !idade.trim() || !turma.trim() || !nota1.trim() || !nota2.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const n1 = Number(nota1.replace(',', '.'));
    const n2 = Number(nota2.replace(',', '.'));

    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert('Atenção', 'As notas precisam ser números válidos.');
      return;
    }

    const media = (n1 + n2) / 2;

    Alert.alert(
      'Dados do aluno',
      `Nome: ${nome.trim()}\nIdade: ${idade.trim()}\nTurma: ${turma.trim()}\nNota 1: ${n1}\nNota 2: ${n2}\nMédia: ${media.toFixed(2)}`,
    );
  }

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="subtitle">Atividade 2</ThemedText>
      <CampoTexto rotulo="Nome do aluno" value={nome} onChangeText={setNome} />
      <CampoTexto rotulo="Idade" value={idade} onChangeText={setIdade} keyboardType="number-pad" />
      <CampoTexto rotulo="Turma" value={turma} onChangeText={setTurma} />
      <CampoTexto rotulo="Nota 1" value={nota1} onChangeText={setNota1} keyboardType="decimal-pad" />
      <CampoTexto rotulo="Nota 2" value={nota2} onChangeText={setNota2} keyboardType="decimal-pad" />
      <Botao titulo="Calcular média" onPress={mostrarMedia} />
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
