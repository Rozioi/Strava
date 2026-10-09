import { useEffect, useState } from 'react';
import {
  init as initSDK,
  postEvent,
  requestWriteAccess,
} from '@tma.js/sdk-react';
import './App.css';
import { useSyncTheme } from './hooks/useThemeSync';
import Router from './router/main.router';

function App() {
  const [isSdkReady, setIsSdkReady] = useState(false);

  useEffect(() => {
    // Инициализируем SDK и ждем готовности
    initSDK()
      .then(() => {
        setIsSdkReady(true);

        requestWriteAccess().catch(console.error);
        postEvent("web_app_request_fullscreen");
      })
      .catch(console.error);

  }, []);

  useSyncTheme(isSdkReady);

  if (!isSdkReady) {
    return <div style={{ background: 'var(--tg-theme-bg-color)', height: '100vh' }} />;
  }

  return <Router />;
}

export default App;
