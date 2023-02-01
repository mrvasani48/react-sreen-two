import './App.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { HttpQueryClientProvider } from 'provider';
import PropTypes from "prop-types";
import { CssVarsProvider } from '@mui/joy';

App.propTypes = {
  router: PropTypes.elementType,
}

function App({ router }) {
  const Router = router || BrowserRouter

  return (
    <>
      <HttpQueryClientProvider>        
          <Provider store={store}>
            <CssVarsProvider>
              <Router ignoreScrollBehavior>
                <AppRoutes />
              </Router>
            </CssVarsProvider>
          </Provider>        
      </HttpQueryClientProvider>
    </>
  );
}

export default App