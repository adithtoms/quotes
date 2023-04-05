import './App.css';
import Quotes from './components/Quotes';
import Header from './components/Header';
import Bookmarks from './components/Bookmarks';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header />
<Routes>
  <Route path='/' element={<Quotes></Quotes>}></Route>
  <Route path='/bookmarks' element={<Bookmarks/>}></Route>
</Routes>

    </div>
  );
}

export default App;
