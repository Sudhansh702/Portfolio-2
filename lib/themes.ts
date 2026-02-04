// Theme configuration for the portfolio
// Switch themes by changing NEXT_PUBLIC_THEME in .env.local

export type ThemeName = 'teal_amber' | 'slate_coral' | 'navy_mint';

export interface ThemeColors {
  name: string;
  description: string;
  light: {
    bg: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
  };
  dark: {
    bg: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
  };
  primary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  accent: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
}

export const themes: Record<ThemeName, ThemeColors> = {
  teal_amber: {
    name: 'Teal & Amber',
    description: 'Professional yet vibrant - Emerald teal with warm amber accents',
    light: {
      bg: '#fafaf9',
      surface: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#475569',
    },
    dark: {
      bg: '#0a0a0a',
      surface: '#171717',
      textPrimary: '#fafafa',
      textSecondary: '#a1a1aa',
    },
    primary: {
      light: '#14b8a6', // teal-500
      DEFAULT: '#0d9488', // teal-600
      dark: '#0f766e', // teal-700
    },
    accent: {
      light: '#fbbf24', // amber-400
      DEFAULT: '#f59e0b', // amber-500
      dark: '#d97706', // amber-600
    },
  },
  slate_coral: {
    name: 'Slate & Coral',
    description: 'Modern and bold - Charcoal slate with vibrant coral/peach accents',
    light: {
      bg: '#f8fafc',
      surface: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#475569',
    },
    dark: {
      bg: '#0f172a',
      surface: '#1e293b',
      textPrimary: '#f1f5f9',
      textSecondary: '#94a3b8',
    },
    primary: {
      light: '#64748b', // slate-500
      DEFAULT: '#475569', // slate-600
      dark: '#334155', // slate-700
    },
    accent: {
      light: '#fb923c', // orange-400 (coral)
      DEFAULT: '#f97316', // orange-500 (coral)
      dark: '#ea580c', // orange-600 (coral)
    },
  },
  navy_mint: {
    name: 'Navy & Mint',
    description: 'Tech-forward and clean - Deep navy with refreshing mint/cyan accents',
    light: {
      bg: '#f0fdfa',
      surface: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#475569',
    },
    dark: {
      bg: '#020617',
      surface: '#0f172a',
      textPrimary: '#f8fafc',
      textSecondary: '#94a3b8',
    },
    primary: {
      light: '#1e3a8a', // blue-900
      DEFAULT: '#1e293b', // slate-800 (navy)
      dark: '#0f172a', // slate-900 (navy)
    },
    accent: {
      light: '#5eead4', // teal-300 (mint)
      DEFAULT: '#2dd4bf', // teal-400 (mint)
      dark: '#14b8a6', // teal-500 (cyan)
    },
  },
};

// Get the current theme from environment or default to teal_amber
export function getCurrentTheme(): ThemeColors {
  const themeName = (process.env.NEXT_PUBLIC_THEME as ThemeName) || 'teal_amber';
  return themes[themeName] || themes.teal_amber;
}

// Get theme name
export function getCurrentThemeName(): ThemeName {
  return (process.env.NEXT_PUBLIC_THEME as ThemeName) || 'teal_amber';
}
