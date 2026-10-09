import { useEffect } from 'react';
import { themeParams, on } from '@tma.js/sdk-react';

export function useSyncTheme() {
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      const get = (key: string) => {
        // @ts-ignore - свойства являются сигналами
        return (themeParams as any)[key]?.() || '';
      };

      root.style.setProperty('--tg-theme-bg-color', get('bg_color'));
      root.style.setProperty('--tg-theme-text-color', get('text_color'));
      root.style.setProperty('--tg-theme-hint-color', get('hint_color'));
      root.style.setProperty('--tg-theme-button-color', get('button_color'));
      root.style.setProperty('--tg-theme-button-text-color', get('button_text_color'));
      root.style.setProperty('--tg-theme-secondary-bg-color', get('secondary_bg_color'));

      // ✅ Правильное имя свойства для схемы
      const scheme = get('color_scheme');
      if (scheme) root.setAttribute('data-color-scheme', scheme);
    };

    // 1. Применяем СРАЗУ при монтировании (данные уже есть после initSDK())
    applyTheme();

    // 2. Подписываемся на БУДУЩИЕ изменения темы
    const unsubscribe = on('theme_changed', applyTheme);

    return unsubscribe;
  }, []);
}
