import { useEffect } from 'react';
import { init as initSDK, postEvent, requestWriteAccess, } from '@tma.js/sdk-react';
import './App.css';
import { useSyncTheme } from './hooks/useThemeSync';
import Router from './router/main.router';

function App() {
  initSDK();

  useEffect(() => {
    requestWriteAccess().catch(console.error);
    postEvent("web_app_request_fullscreen");
  }, []);

  useSyncTheme();

  return <Router />;
}

export default App;
