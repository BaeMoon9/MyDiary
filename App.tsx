import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './src/datas/store';


  const App = () => {
    return (
      <Provider store={store}>
				<Main />
			</Provider>
    );
  };

export default App;