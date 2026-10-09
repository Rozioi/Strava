// App.tsx
import { useEffect } from 'react';
import {
  init as initSDK,
  postEvent,
  requestWriteAccess,
  themeParams,
  miniApp,
  backButton,
  viewport,
  initData
} from '@tma.js/sdk-react';
import './App.css';
import Router from './router/main.router';

function App() {
  useEffect(() => {
    initSDK();

    backButton.mount.ifAvailable();
    initData.restore();

    if (miniApp.mount.isAvailable()) {
      themeParams.mount();
      miniApp.mount();

      // ✅ ПРОВЕРКА: Биндим только если еще не забинжено
      if (!themeParams.isCssVarsBound()) {
        themeParams.bindCssVars();
      }
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount().then(() => {
        if (!viewport.isCssVarsBound()) {
          viewport.bindCssVars();
        }
      });
    }

    requestWriteAccess().catch(console.error);
    postEvent("web_app_request_fullscreen");

  }, []);

  return <Router />;
}

export default App;
