import { useEffect } from 'react';
import {
  init as initSDK,
  postEvent,
  requestWriteAccess,
} from '@tma.js/sdk-react';
import './App.css';
import { useSyncTheme } from './hooks/useThemeSync';
import Router from './router/main.router';

function App() {
  useEffect(() => {
    initSDK();

    // Эти запросы НЕ зависят от смены темы
    requestWriteAccess().catch(console.error);
    postEvent("web_app_request_fullscreen");
  }, []);

  // Хук сам применит тему при старте И при смене
  useSyncTheme();

  return <Router />;
}

export default App;
