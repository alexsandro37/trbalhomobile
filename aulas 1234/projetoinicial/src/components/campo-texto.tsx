import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type CampoTextoProps = TextInputProps & {
  rotulo: string;
};

export function CampoTexto({ rotulo, style, ...rest }: CampoTextoProps) {
  const tema = useTheme();

  return (
    <ThemedView style={styles.grupo}>
      <ThemedText type="small">{rotulo}</ThemedText>
      <TextInput
        placeholderTextColor={tema.textSecondary}
        style={[
          styles.input,
          { color: tema.text, backgroundColor: tema.backgroundSelected },
          style,
        ]}
        {...rest}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  grupo: {
    gap: Spacing.one,
    backgroundColor: 'transparent',
  },
  input: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 16,
  },
});
