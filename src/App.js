import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
//Componentes
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <main className='container'>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a nuestra tienda online" />
    </main>
  );
}

export default App;
