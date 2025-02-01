import { createTamagui } from '@tamagui/core';
import { themes, tokens as themeTokens } from '@tamagui/themes';

const tokens = {
  ...themeTokens,
  size: {
    $true: 16, // Default size
    $1: 12,
    $2: 14,
    $3: 16,
    $4: 18,
    $5: 20,
    $6: 24,
    $7: 30,
    $8: 36,
    $9: 48,
  },
  space: { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24 },
  color: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#007AFF',
  },
};

const config = createTamagui({
  themes: {
    light: {
      background: '$white',
      color: '$black',
      primary: '$primary',
    },
    dark: {
      background: '$black',
      color: '$white',
      primary: '$primary',
    },
  },
  tokens,
  fonts: {
    body: {
      family: 'Inter', // Ensure this font is available
      size: {
        $true: 16, // Default size
        $1: 12,
        $2: 14,
        $3: 16,
        $4: 18,
        $5: 20,
        $6: 24,
        $7: 30,
        $8: 36,
        $9: 48,
      },
      lineHeight: {
        $true: 24, // Default line height
        $1: 16,
        $2: 20,
        $3: 22,
        $4: 24,
        $5: 28,
        $6: 32,
        $7: 40,
        $8: 44,
        $9: 56,
      },
    },
  },
  shorthands: {
    p: 'padding',
    m: 'margin',
    bg: 'backgroundColor',
    f: 'flex',
    ai: 'alignItems',
    jc: 'justifyContent',
  },
});

export default config;

export type AppConfig = typeof config;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}