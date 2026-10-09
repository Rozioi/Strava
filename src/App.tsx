// App.tsx
import { useEffect, useState } from 'react';
import {
  init as initSDK,
  postEvent,
  requestWriteAccess,
  on
} from '@tma.js/sdk-react';
import './App.css';
import { useSyncTheme } from './hooks/useThemeSync';
import Router from './router/main.router';

function App() {
  const [isSdkReady, setIsSdkReady] = useState(false);

  useEffect(() => {
    initSDK();

    const unsubscribe = on('theme_changed', () => {
      setIsSdkReady(true);

      requestWriteAccess().catch(console.error);
      postEvent("web_app_request_fullscreen");
    });

    return unsubscribe;
  }, []);

  useSyncTheme();

  if (!isSdkReady) {
    return <div style={{ background: '#ffffff', height: '100vh' }} />;
  }

  return <Router />;
}

export default App;
