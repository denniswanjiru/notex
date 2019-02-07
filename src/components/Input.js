import React, { useContext } from 'react'
import NoteContext from '../NoteContext';

export default function Input() {
  const {context} = useContext(NoteContext);

  const handleChange = e => {
    context.setNote(e.target.value)
  }
  return (
    <form onSubmit={context.save}>
      <input
        type="text"
        placeholder="What do you wanna do?"
        onChange={handleChange}
        value={context.note}
      />
    </form>
  )
}
