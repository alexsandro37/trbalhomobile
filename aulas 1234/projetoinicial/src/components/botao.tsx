import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { Spacing } from '@/constants/theme';

type BotaoProps = {
  titulo: string;
  onPress: () => void;
};

export function Botao({ titulo, onPress }: BotaoProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.botao, pressed && styles.apertado]}>
      <ThemedText style={styles.texto}>{titulo}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#208AEF',
    borderRadius: Spacing.two,
    paddingVertical: Spacing.three,
    alignItems: 'center',
  },
  apertado: {
    opacity: 0.7,
  },
  texto: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
