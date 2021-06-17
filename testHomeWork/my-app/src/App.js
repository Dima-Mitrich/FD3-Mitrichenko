import React, {Fragment} from 'react';
import AbonentsContainer from './components/AbonentsContainer';
import FilterButtons from './components/FiltrBtns';

import './App.css';

export let mtsClients = [
  { name: 'Ivan', lastName: 'Ivanov', middleName: 'Ivanovich', ballance: 200, id: 1 },
  { name: 'Petr', lastName: 'Petrov', middleName: 'Petrovich', ballance: 100, id: 2 },
  { name: 'Sidor', lastName: 'Sidorov', middleName: 'Sidorovich', ballance: 50, id: 3 },
  { name: 'Dmitrij', lastName: 'Dmitrijev', middleName: 'Dmitrievich', ballance: -100, id: 4 },
  { name: 'Nikolay', lastName: 'Nikolayev', middleName: 'Nikolaevich', ballance: 70, id: 5 }
];

function App() {
  return (
    <Fragment>
      <FilterButtons />
      <AbonentsContainer mtsClients={mtsClients} />
    </Fragment>
  );
}

export default App;
