import React, { useEffect, useReducer, useContext, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Note from './Note';
import axios from 'axios';
import config from '../config';
import { NotesReducer } from '../reducers';
import NoteContext from '../NoteContext';

const initialState = {
  notes: [],
  success: false,
  error: null,
  loading: false
}

export default function NoteList() {
  const [state, dispatch] = useReducer(NotesReducer, initialState);
  const { context } = useContext(NoteContext);

  useEffect(() => {
    context.setSaved(false);
    getNotes();
  }, [context.saved]);

  const getNotes = () => {
    dispatch({ type: 'GET_NOTES' });
    axios.get(config.BASE_URL)
      .then(res => dispatch({ type: 'GET_NOTES_SUCCESS', notes: res.data.notes }))
      .catch(error => dispatch({ type: 'GET_NOTES_FAILURE', error }))
  }

  return (
    <Fragment>
      <ReactCSSTransitionGroup
        transitionName={{enter: 'enter', leave: 'leave'}}
        transitionAppear={false}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        {state.notes && state.notes.map(note => <Note key={note.id} note={note} />)}
      </ReactCSSTransitionGroup>
    </Fragment>
  )
}
