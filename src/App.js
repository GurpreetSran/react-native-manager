import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDnc4AUr41UoY15YKC6GV27deUou92Ldcs',
      authDomain: 'manager-37383.firebaseapp.com',
      databaseURL: 'https://manager-37383.firebaseio.com',
      storageBucket: 'manager-37383.appspot.com',
      messagingSenderId: '819643077053'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
