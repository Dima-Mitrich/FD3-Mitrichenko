import './App.css';

import React from 'react';

import MyStore from './components/MyStore';

let storeName = 'Snickerhead';
let goods1 = [
  { name: 'air max', price: 80, photoURL: 'www.airM.com', remainder: 18, id: 1 },
  { name: 'air force', price: 90, photoURL: 'www.airF.com', remainder: 7, id: 2 },
  { name: 'monarch', price: 50, photoURL: 'www.monar.com', remainder: 22, id: 3 },
  { name: 'dunk low', price: 130, photoURL: 'www.dunk.com', remainder: 19, id: 4 },
  { name: 'blazer', price: 100, photoURL: 'www.blazer.com', remainder: 3, id: 5 },
  { name: 'M2K Tekno', price: 80, photoURL: 'www.MKtekno.com', remainder: 44, id: 6 },
];

function App() {
  return (
    <MyStore name={storeName}
      goods={goods1} />
  )
}

export default App;
