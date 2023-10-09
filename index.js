    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { Provider } from 'react-dom/client';

    import App from './App';
    import store from './store';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Provider store={store}>

        <App />
        </Provider>
      
      </React.StrictMode>
    );
    // this will make the store available to the whole store this provider componenet enclosing te app tags 


