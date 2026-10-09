import { useEffect } from 'react';
import { themeParams } from '@tma.js/sdk-react';

export function useSyncTheme(isReady: boolean) {
  useEffect(() => {
    if (!isReady) return;
    const root = document.documentElement;

    // Безопасный геттер для сигналов
    const get = (key: string) => {
      // @ts-ignore - свойства являются сигналами, TS не всегда это корректно типизирует
      return (themeParams as any)[key]?.() || '';
    };

    // Основные цвета
    root.style.setProperty('--tg-theme-bg-color', get('bg_color'));
    root.style.setProperty('--tg-theme-text-color', get('text_color'));
    root.style.setProperty('--tg-theme-hint-color', get('hint_color'));
    root.style.setProperty('--tg-theme-button-color', get('button_color'));
    root.style.setProperty('--tg-theme-button-text-color', get('button_text_color'));
    root.style.setProperty('--tg-theme-secondary-bg-color', get('secondary_bg_color'));

    // ✅ ИСПРАВЛЕНО: используем snake_case color_scheme
    const scheme = get('color_scheme');
    if (scheme) {
      root.setAttribute('data-color-scheme', scheme);
    }

    // Meta tag
    const meta = document.getElementById('theme-color-meta');
    if (meta) {
      meta.setAttribute('content', get('bg_color') || '#ffffff');
    }

  }, []);
}
