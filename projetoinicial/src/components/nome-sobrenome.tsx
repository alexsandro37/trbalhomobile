import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

import { Botao } from './botao';
import { CampoTexto } from './campo-texto';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';

export function NomeSobrenome() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  function confirmar() {
    if (nome.trim() === '' || sobrenome.trim() === '') {
      Alert.alert('Atenção', 'Preencha o nome e o sobrenome.');
      return;
    }
    Alert.alert('Nome completo', `${nome.trim()} ${sobrenome.trim()}`);
  }

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="subtitle">Atividade 1</ThemedText>
      <CampoTexto rotulo="Nome" value={nome} onChangeText={setNome} placeholder="Digite o nome" />
      <CampoTexto
        rotulo="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
        placeholder="Digite o sobrenome"
      />
      <Botao titulo="Confirmar" onPress={confirmar} />
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
