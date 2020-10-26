import React, { useState } from 'react';
import './App.css';
import List from './shared/List';
import { last, defaultTo } from 'lodash';

const myList = [
  {
    id: 1,
    value: 'First'
  },
  {
    id: 2,
    value: 'First'
  },
  {
    id: 3,
    value: 'Second'
  },
  {
    id: 4,
    value: 'First'
  },
  {
    id: 5,
    value: 'First'
  }
]


function App() {
  const [list, setList] = useState([...myList]);
  const handleInputKeyDown = e => {
    if (e.key === 'Enter') {
      setList([...list, {
        id: defaultTo(last(list), {id:0}).id + 1,
        value: e.target.value
      }])
    }
  };


  return (
    <div>
      <div>
        <input type='text' onKeyDown={handleInputKeyDown}></input>
      </div>
      <List list={list} />
    </div>
  );
}

export default App;
