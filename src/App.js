import './App.css';
//Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCounter from './components/ItemCounter/ItemCounter';
//React Router
//import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
      <main className='container'>
        <NavBar/>
        <ItemListContainer />
        <ItemCounter />
      </main>
  );
}

export default App;
