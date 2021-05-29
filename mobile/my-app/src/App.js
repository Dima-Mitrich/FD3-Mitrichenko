import React, { Fragment } from 'react';
import CompanyButtons from './components/CompanyButtons';
import AbonentsContainer from './components/AbonentsContainer';
import FilterButtons from './components/FiltrBtns';

let mtsClients = [
  { name: 'Ivan', lastName: 'Ivanov', middleName: 'Ivanovich', ballance: 200, id: 1 },
  { name: 'Petr', lastName: 'Petrov', middleName: 'Petrovich', ballance: 100, id: 2 },
  { name: 'Sidor', lastName: 'Sidorov', middleName: 'Sidorovich', ballance: 50, id: 3 },
  { name: 'Dmitrij', lastName: 'Dmitrijev', middleName: 'Dmitrievich', ballance: -100, id: 4 },
  { name: 'Nikolay', lastName: 'Nikolayev', middleName: 'Nikolaevich', ballance: 70, id: 5 }
];

let velcomeClients = [
  { name: 'Kristina', lastName: 'Ivanova', middleName: 'Borisovna', ballance: -200, id: 1 },
  { name: 'Sasha', lastName: 'Kostleva', middleName: 'Olegovna', ballance: 100, id: 2 },
  { name: 'Jilia', lastName: 'Poster', middleName: 'Valerjevna', ballance: -50, id: 3 },
  { name: 'Valeria', lastName: 'Zayceva', middleName: 'Alexandrovna', ballance: -170, id: 4 },
  { name: 'Evgenija', lastName: 'Skardino', middleName: 'Sergeevna', ballance: 90, id: 5 }
]

function App() {
  return (
    <Fragment>
      <CompanyButtons />
      <FilterButtons />
      <AbonentsContainer mtsClients={mtsClients} velcomeClients={velcomeClients} />
    </Fragment>
  );
}

export default App;
