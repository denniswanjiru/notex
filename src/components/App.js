import React, { useState } from 'react';
import axios from 'axios';

import NoteContext from '../NoteContext';
import Input from './Input';
import NoteList from './NoteList';
import config from '../config';
import Nav from './Nav';

export default function App() {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  const save = e => {
    e.preventDefault();
    const data = {title: note, body: note};
    axios.post(config.BASE_URL, data)
    .then(() => {
      setNote('');
      setSaved(true);
    })
    .catch(err => console.log(err));
  }

  const remove = (id) => {
    axios.delete(`${config.BASE_URL}/${id}`)
      .then((res) => setSaved(true))
      .catch(err => console.log(err));
  }

  const context = { note, setNote, save, saved, setSaved, remove };
  return (
    <NoteContext.Provider value={{context}}>
      <div className="container">
        <div className="layout">
          <Nav />
          <Input />
          <NoteList />
        </div>
      </div>
    </NoteContext.Provider>
  )
}
