import React,{useState} from 'react';
import Home from './pages/Home'
import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import history from './browserHistory';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element = {<Home sendData={setUser} />} />
          <Route path='/messenger' element = {<Dashboard user={user}/>} />
        </Routes>
    </HistoryRouter>
  
  );
}

export default App;



// TODO:
// 1. LogOut button (кнопка розлогіну): почистити store (initialState) + очистка localStorage
// 2. Додати до чату нового мембера
// 3. Зробити в компоненті Чат шапку з назвою чату і кількістю мемберів 
