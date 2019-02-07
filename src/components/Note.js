import React, { useContext } from 'react'
import NoteContext from '../NoteContext';

export default function Note({note}) {
  const { title, id } = note;
  const { context } = useContext(NoteContext)
  return (
    <div className="note">
      <p>{title}</p>
      <div className="delete" onClick={() => context.remove(id)}>-</div>
    </div>
  )
}
