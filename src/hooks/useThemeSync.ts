import { useEffect } from 'react';
import { themeParams } from '@tma.js/sdk-react';

export function useSyncTheme() {
  const theme = themeParams;

  useEffect(() => {
    const root = document.documentElement;

    // Основные цвета
    root.style.setProperty('--tg-theme-bg-color', theme.bgColor || '#ffffff');
    root.style.setProperty('--tg-theme-text-color', theme.textColor || '#000000');
    root.style.setProperty('--tg-theme-hint-color', theme.hintColor || '#999999');

    // Кнопки
    root.style.setProperty('--tg-theme-button-color', theme.buttonColor || '#3390ec');
    root.style.setProperty('--tg-theme-button-text-color', theme.buttonTextColor || '#ffffff');

    // Второстепенные фоны и заголовки
    root.style.setProperty('--tg-theme-secondary-bg-color', theme.secondaryBgColor || '#efeff3');
    root.style.setProperty('--tg-theme-header-bg-color', theme.headerBgColor || '#efeff3');
    root.style.setProperty('--tg-theme-bottom-bar-bg-color', theme.bottomBarBgColor || '#e4e4e4');

    // Акценты и ссылки
    root.style.setProperty('--tg-theme-accent-text-color', theme.accentTextColor || '#2481cc');
    root.style.setProperty('--tg-theme-link-color', theme.linkColor || '#2481cc');

    // Разделители и секции
    root.style.setProperty('--tg-theme-section-separator-color', theme.sectionSeparatorColor || '#eaeaea');
    root.style.setProperty('--tg-theme-section-bg-color', theme.sectionBgColor || '#ffffff');
    root.style.setProperty('--tg-theme-section-header-text-color', theme.sectionHeaderTextColor || '#6d6d71');

    // Деструктивные действия (красный цвет)
    root.style.setProperty('--tg-theme-destructive-text-color', theme.destructiveTextColor || '#ff3b30' as CSSPropertyRule);

    // Субтитры
    root.style.setProperty('--tg-theme-subtitle-text-color', theme.subtitleTextColor || '#999999');

    // Цветовая схема (light/dark)
    if (theme.colorScheme) {
      root.style.setProperty('--tg-color-scheme', theme.colorScheme);
    }

    document.getElementById('theme-color-meta')?.setAttribute(
      'content',
      theme.bgColor || '#ffffff'
    );
  }, [theme]);
}
